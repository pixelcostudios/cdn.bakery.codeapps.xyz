"use strict";
var KTUsersAddRole = function () {
    const t = document.getElementById("kt_modal_add_role"),
        e = t.querySelector("#kt_modal_add_role_form"),
        n = new bootstrap.Modal(t),
        d = document.getElementById("kt_table_users");
    return {
        init: function () {
            (() => {
                var o = FormValidation.formValidation(e, {
                    fields: {
                        name: {
                            validators: {
                                notEmpty: {
                                    message: "Role name is required"
                                }
                            }
                        },
                        description: {
                            validators: {
                                notEmpty: {
                                    message: "Description is required"
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger,
                        bootstrap: new FormValidation.plugins.Bootstrap5({
                            rowSelector: ".fv-row",
                            eleInvalidClass: "",
                            eleValidClass: ""
                        })
                    }
                });
                const i = t.querySelector('[data-kt-users-modal-action="submit"]');
                i.addEventListener("click", (t => {
                    t.preventDefault(), o && o.validate().then((function (t) {
                        // console.log("validated!"), "Valid" == t ? (i.setAttribute("data-kt-indicator", "on"), i.disabled = !0, setTimeout((function () {
                        //     i.removeAttribute("data-kt-indicator"), i.disabled = !1, Swal.fire({
                        //         text: "Form has been successfully submitted!",
                        //         icon: "success",
                        //         buttonsStyling: !1,
                        //         confirmButtonText: "Ok, got it!",
                        //         customClass: {
                        //             confirmButton: "btn btn-primary"
                        //         }
                        //     }).then((function (t) {
                        //         t.isConfirmed && n.hide()
                        //     }))
                            
                        // }), 2e3)) : Swal.fire({
                        //     text: "Sorry, looks like there are some errors detected, please try again.",
                        //     icon: "error",
                        //     buttonsStyling: !1,
                        //     confirmButtonText: "Ok, got it!",
                        //     customClass: {
                        //         confirmButton: "btn btn-primary"
                        //     }
                        // })

                        if("Valid" == t)
                        {
                            // var name        = $("input[name=name]").val();
                            // var description = $("input[name=description]").val();

                            var formData = {
                                name: $("#kt_modal_add_role_form input[name=name]").val(),
                                description: $("#kt_modal_add_role_form input[name=description]").val(),
                            };

                            var role_add_list = {
                                "method": "POST",
                                "url": url_Base+"member/role_add",
                                "data":formData,
                                "dataType": "json",
                                "encode": true,
                                "headers": {
                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                },
                                "timeout": 0,
                            };
                            $.ajax(role_add_list).done(function (response) 
                            {
                                console.log(response);
                                if(response.status==200)
                                {
                                    i.setAttribute("data-kt-indicator", "on");
                                    i.disabled = !0;
                                    setTimeout((function () {
                                        Swal.fire({
                                            text: "Form has been successfully submitted!",
                                            icon: "success",
                                            buttonsStyling: !1,
                                            confirmButtonText: "Ok, got it!",
                                            customClass: {
                                                confirmButton: "btn btn-primary"
                                            }
                                        }).then((function (t) {
                                            t.isConfirmed && n.hide();
                                            $("#kt_modal_add_role_form input[name=name]").val("");
                                            $("#kt_modal_add_role_form input[name=description]").val("");
                                        }));
                                        i.removeAttribute("data-kt-indicator");
                                        i.disabled = !1;
                                    }));
                                    $(d).DataTable().clear().destroy();

                                    $(d).DataTable({
                                        info: !1,
                                        order: [],
                                        ajax: url_Base+"member/role_json",
                                        pageLength: 10,
                                        lengthChange: !1,
                                        paging: false,
                                        searching: false,
                                        columnDefs: [
                                            { orderable: !1, targets: 0 },
                                            { orderable: !1, targets: 3 },
                                        ],
                                    }).on("draw", function () {
                                    });
                                    console.log("success");
                                }
                                else
                                {
                                    Swal.fire({
                                        text: "Sorry, looks like there are some errors detected, please try again.",
                                        icon: "error",
                                        buttonsStyling: !1,
                                        confirmButtonText: "Ok, got it!",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }});
                                }
                            });


                            // const data = {
                            //     name: $("input[name=name]").val(),
                            //     description: $("input[name=description]").val(),
                            //   };
                            
                            // $.ajax({
                            // type: 'POST',
                            // url: url_Base+"member/role_add",
                            // data: data,
                            // contentType: 'application/json',
                            // })
                            // .done((data) => {
                            //     console.log({ data });
                            // })
                            // .fail((err) => {
                            //     console.error(err);
                            // })
                            // .always(() => {
                            //     console.log('always called');
                            // });
                        }
                        else
                        {
                            Swal.fire({
                            text: "Sorry, looks like there are some errors detected, please try again.",
                            icon: "error",
                            buttonsStyling: !1,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn btn-primary"
                            }});
                        }                        

                    }))
                })), t.querySelector('[data-kt-users-modal-action="cancel"]').addEventListener("click", (t => {
                    t.preventDefault(), Swal.fire({
                        text: "Are you sure you would like to cancel?",
                        icon: "warning",
                        showCancelButton: !0,
                        buttonsStyling: !1,
                        confirmButtonText: "Yes, cancel it!",
                        cancelButtonText: "No, return",
                        customClass: {
                            confirmButton: "btn btn-primary",
                            cancelButton: "btn btn-active-light"
                        }
                    }).then((function (t) {
                        t.value ? (e.reset(), n.hide()) : "cancel" === t.dismiss && Swal.fire({
                            text: "Your form has not been cancelled!.",
                            icon: "error",
                            buttonsStyling: !1,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn btn-primary"
                            }
                        })
                    }))
                })), t.querySelector('[data-kt-users-modal-action="close"]').addEventListener("click", (t => {
                    t.preventDefault(), Swal.fire({
                        text: "Are you sure you would like to cancel?",
                        icon: "warning",
                        showCancelButton: !0,
                        buttonsStyling: !1,
                        confirmButtonText: "Yes, cancel it!",
                        cancelButtonText: "No, return",
                        customClass: {
                            confirmButton: "btn btn-primary",
                            cancelButton: "btn btn-active-light"
                        }
                    }).then((function (t) {
                        t.value ? (e.reset(), n.hide()) : "cancel" === t.dismiss && Swal.fire({
                            text: "Your form has not been cancelled!.",
                            icon: "error",
                            buttonsStyling: !1,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn btn-primary"
                            }
                        })
                    }))
                }))
            })()
        }
    }
}();
KTUtil.onDOMContentLoaded((function () {
    KTUsersAddRole.init()
}));