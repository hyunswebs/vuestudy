<template>
<div>
    <div class="board-basic">
      <table>
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
                  <td><a href="/view">{{td.title}}</a></td>
                  <td>{{td.auther}}</td>
                  <td>{{td.date}}</td>
              </tr>
          </tbody>
      </table>
  </div>
</div>  
</template>

<script>
export default {
  props: ['list']
}
</script>

