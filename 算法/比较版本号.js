const compareVersion = (version1, version2) => {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    let i = 0;
    while (v1[i] || v2[i]) {
        const n1 = Number(v1 ?? 0);
        const n2 = Number(v2 ?? 0);
        if (n1 < n2) {
            return -1;
        }
        if (n1 > n2) {
            return 1;
        }
    }
    return 0;
}