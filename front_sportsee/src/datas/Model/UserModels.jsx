export class UserModels {
    constructor(datas) {
        this.id=datas.id;
        this.todayScore=datas.todayScore || datas.score;
        this.userInfos=datas.userInfos;
        this.keyData=datas.keyData;
    }
}