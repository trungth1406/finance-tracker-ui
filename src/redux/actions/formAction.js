export const ResourceFormAction = {
    addForm: function addNewResourceForm(data) {
        return {type: "ADD_RESOURCE_FORM", data}
    },
    removeForm: function removeResourceForm(data) {
        return {type: "REMOVE_RESOURCE_FORM", data};
    }

}


export const AccountFormAction = {
    addForm: function addNewResourceForm(data) {
        return {type: "ADD_ACCOUNT_FORM", data}
    },
    removeForm: function removeResourceForm(data) {
        return {type: "REMOVE_ACCOUNT_FORM", data};
    }

}



