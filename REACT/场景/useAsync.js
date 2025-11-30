/**
 * 支持请求重试的 hook
 */
import {useCallback, useState} from 'react';

export const useAsync = ({asyncFn, retryCount = 3}) => {
    const [data, setData] = useState();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const run = useCallback(async (...args) => {
        setLoading(true);
        const retry = async (curRetryCount) => {
                try {
                    const res = await asyncFn(...args);
                    setData(res);
                    setError('');
                    setLoading(false);
                    return res;
                } catch (err) {
                    if (curRetryCount > 0) {
                        return retry(curRetryCount - 1);
                    } else {
                        setError(err);
                        setLoading(false);
                        throw err;
                    }
                }

        }
        return retry(retryCount);

    }, [retryCount, asyncFn, setData, setError,]);

    return {
        data,
        error,
        loading,
        run
    }
}