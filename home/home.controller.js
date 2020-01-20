class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.items = [
      { id: 1, firstLine: 'Hola 1', secondLine: 'World 1' },
      { id: 2, firstLine: 'Hola 2', secondLine: 'World 2' },
      { id: 3, firstLine: 'Hola 3', secondLine: 'World 3' },
      { id: 4, firstLine: 'Hola 4', secondLine: 'World 4' },
      { id: 5, firstLine: 'Hola 5', secondLine: 'World 5' },
      { id: 6, firstLine: 'Hola 6', secondLine: 'World 6' },
      { id: 7, firstLine: 'Hola 7', secondLine: 'World 7' },
    ];
    this.selected = null;
  }

  onSelected(selected) {
    this.selected = selected;
  }

  log(event) {
    console.log(event);
  }
}

export default HomeCtrl;