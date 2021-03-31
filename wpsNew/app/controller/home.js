'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;

        let result = await this.app.mongo.find('speed');
        let params = parseInt(ctx.request.body.money);
        let data = []

        let paperNUM = parseInt(params / 360);
        console.log(paperNUM)
        let shengxiaMoney = params - paperNUM * 180;
        data.push({ "introduce": "A4纸（箱）", "money": 180, "num": paperNUM, "allmoney": paperNUM * 180 })
        for (let i = 1; i < result.length; i++) {
            if (i == result.length - 1) {
                data.push({ "introduce": "塑料袋", "money": 0.1, "num": parseInt(shengxiaMoney / 0.1), "allmoney": shengxiaMoney })
            } else {
                let num = parseInt(shengxiaMoney / (2 * result[i].money));
                if (num >= 1) {
                    shengxiaMoney = shengxiaMoney - num * result[i].money;
                    data.push({ "introduce": result[i].introduce, "money": result[i].money, "num": num, "allmoney": num * result[i].money })
                } else {
                    break;
                }
            }
        }
        ctx.body = {
            code: 0,
            data: data,
            allmoney: params
        }

    }
}

module.exports = HomeController;
