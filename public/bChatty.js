var bC = {
	submitNewUser: function(){
		var newUsername = $('#txtNewUsername').val();
		var newPassword = $('#txtNewPassword').val();
		
		 $.ajax({
        url: '/user/',
        cache: false,
        type: 'post',
        data: 'username=' + newUsername + "&password=" + newPassword,
        success: function (data) {
            AddSheetUI(SheetID, ParentID, data, 1, true);
			

        error: ProcessAddedNodeError

    });

	}
	}
	
}
