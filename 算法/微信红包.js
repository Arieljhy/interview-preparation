class RedBag{
    constructor(people, money) {
        this.totalNum = people;
        this.totalAmount = money;
        this.count = 0;
    }
    roll() {
        this.count++;
        if (this.count > this.totalNum) {
            console.log("已经抢光了")
        } 
        else {
            let residue = this.totalNum - this.count + 1; // 剩余人
            if (residue > 1) {
                let money = this.getAmount(this.totalAmount,residue);
                console.log("抢到：",money,"，还剩：", this.totalAmount)
            }
            if (residue === 1) {
                console.log("抢到：",this.totalAmount,"， 还剩：", 0)
            }
        }

    }
    getAmount(amount, num) { //剩余金额，剩余数量
        let n = amount / num;
        let money = ((Math.random() * n + 0.01) * (Math.random() + 1)).toFixed(2);
        this.totalAmount = (this.totalAmount - money).toFixed(2);
        return money;
    }
}

let p = new RedBag(10,100);
p.roll();
p.roll();
p.roll();
p.roll();
p.roll();
p.roll();
p.roll();
p.roll();
p.roll();
p.roll();

p.roll();
p.roll();
