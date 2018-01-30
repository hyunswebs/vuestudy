
export default{
    data: [
        {
            number : '1',
            title : '글 제목 01',
            auther : '글쓴이 01',
            date : '18.01.30'
        },
        {
            number : '2',
            title : '글 제목 02',
            auther : '글쓴이 02',
            date : '18.01.31'
        },
    ],

    list(){
        return Promise.resolve(this.data);
    }
}