<template>
    <div class="board-wrap">
        <table class="board board-basic">
            <thead>
                <tr>
                    <th><input type="checkbox"></th>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>날짜</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="td in list">
                    <th><input type="checkbox"></th>
                    <td>{{td.number}}</td>
                    <td><a href="/BoardView">{{td.title}}</a></td>
                    <td>{{td.auther}}</td>
                    <td>{{td.date}}</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
export default {
  props: ['list']
}
</script>
<style lang="scss">
   @import '../assets/css/board.scss'
</style>

