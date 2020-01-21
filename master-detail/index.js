import angular from 'angular';
import MasterDetailHtml from './master-detail.html';
import './master-detail.css'
// Create the module where our functionality can attach to
let masterDetail = angular.module('master-detail', []);
// components
import MasterDetailCtrl from './master-detail.controller';
masterDetail.component('masterDetail', {
  template: MasterDetailHtml,
  controller: MasterDetailCtrl,
  controllerAs: '$masterdetail',
  bindings: {
    masterTemplate: '@',
    detailTemplate: '@',
    idKey: '@',
    title: '@',
    unselectedMessage: '@',
    items: '<',
    hasPagination: '<',
    selected: '<',
    onSelected: '&',
    onFirstPage: '&',
    onLastPage: '&',
    onPreviousPage: '&',
    onNextPage: '&',
  },
  transclude: {
    master: '?masterSlot',
    detail: '?detailSlot',
    pagination: '?paginationSlot'
  }
});


export default masterDetail;