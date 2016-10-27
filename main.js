var current_pointer = 1
var future_pointer = 3

$(function(){
  $.get('/roadmap_mod.txt', function(data){
      var papers = data.split(';');
      var past_papers = [];
      var current_papers = [];
      var future_papers = [];

      for (idx in papers) {
        if (idx < current_pointer) {
          past_papers.push(JSON.parse(papers[idx]));
        } else if (idx < future_pointer) {
          current_papers.push(JSON.parse(papers[idx]));
        } else {
          future_papers.push(JSON.parse(papers[idx]));
        }
      }

      console.log(current_papers);

      var app_past = new Vue({
      	el: '#app-past',
        data: {
          papers: past_papers
        }
      });

      var app_current = new Vue({
      	el: '#app-current',
        data: {
          papers: current_papers
        }
      });

      var app_future = new Vue({
      	el: '#app-future',
        data: {
          papers: future_papers
        }
      });
  });
});
