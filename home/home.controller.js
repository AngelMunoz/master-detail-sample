class HomeCtrl {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.items = [];
    this.selected = null;
  }
  $onInit() {
    return this._getPosts();
  }

  onSelected(selected) {
    this.selected = selected;
    return this._getComments();
  }

  log(event) {
    console.log(event);
  }

  _getPosts() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(({ data }) => this.items = data)
  }
  _getComments() {
    if (!this.selected) return;
    this.$http.get(`https://jsonplaceholder.typicode.com/posts/${this.selected.id}/comments`).then(({ data }) => this.selected.comments = data);
  }
}

export default HomeCtrl;