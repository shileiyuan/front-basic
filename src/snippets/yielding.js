var root = document.getElementById('root');

function render() {
  var data = getData();
  var groups = divideIntoGroups(data, 500);
  var i = 0;
  var interval = 10;
  setTimeout(function process() {
    renderPart(groups[i]);
    i++;
    if (i < groups.length) {
      setTimeout(process, interval);
    }
  }, interval)
}

function getData() {
  var data = [];
  for (var i = 0; i < 13 * 10000; i++) {
    data.push({ title: 'title' + i });
  }
  return data;
}

function divideIntoGroups(data, groupSize) {
  var groups = [], group = [];
  for (var i = 0, len = data.length; i < len; i++) {
    group.push(data[i]);
    if ((i + 1) % groupSize === 0) {
      groups.push(group);
      group = [];
    }
  }
  //剩下的不够500个，也一并加进去
  if (group.length > 0) {
    groups.push(group);
  }
  return groups;
}

//加载某一批数据的函数
function renderPart(group) {
  var html = "";
  for (var i = 0; i < group.length; i++) {
    var item = group[i];
    html += "<li>" + item.title + "</li>";
  }
  root.insertAdjacentHTML('beforeend', html);
}

