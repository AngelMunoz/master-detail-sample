class MasterDetailCtrl {
  constructor($scope) {
    'ngInject'
    this.$scope = $scope
  }

  _isEmpty(obj) {
    return Object.keys(obj || {}).length === 0;
  }

  $onInit() {
    this.idKey = this.idKey || 'id';
    this.selected = this._isEmpty(this.selected) ? null : this.selected;
    this.$scope.$detail = this.selected;
    this.items = this.items || [];
  }

  $onChanges({ selected }) {
    if (selected && selected.currentValue) {
      this.$scope.$detail = selected.currentValue;
      this.selectedIndex = this.items.findIndex((item) => item[this.idKey] === selected.currentValue[this.idKey]);
    } else if (selected && !selected.currentValue) {
      this.selected = null;
      this.$scope.$detail = null;
      this.selectedIndex = -1;
    }
  }

  back() {
    this.onSelected({ selected: null });
  }

  go(where) {
    if (this.selected) {
      this.selectedIndex = this.items.findIndex((item) => item[this.idKey] === this.selected[this.idKey]);
    }
    switch (where) {
      case 'first':
        return this.onFirstPage();
      case 'last':
        return this.onLastPage();
      case 'back':
        return this.onPreviousPage();
      case 'next':
        return this.onNextPage();
    }
  }

  selectItem(selected, index) {
    this.selectedIndex = index;
    this.onSelected({ selected });
  }

  isSelected(item) {
    return item[this.idKey] === this.selected[this.idKey];
  }
}

export default MasterDetailCtrl;