'use strict';

angular.module('insight.networks')
	.factory('Networks',
		function(Constants, SIKENCoreLib) {
			return {
				getCurrentNetwork: function () {
					return SIKENCoreLib.Networks.get(Constants.NETWORK);
				}
			}
		});