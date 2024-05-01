"use strict";
var KTAccountSettingsProfileDetails = (function () {
    var t, n;
    return {
        init: function () {
            (t = document.getElementById("kt_account_profile_details_form")) &&
                (t.querySelector("#kt_account_profile_details_submit"),
                (n = FormValidation.formValidation(t, {
                    fields: {
                        gender: {
                            validators: {
                                notEmpty: { message: "Gender is required" },
                            },
                        },
                        first_name: {
                            validators: {
                                notEmpty: { message: "First name is required" },
                            },
                        },
                        mobile: {
                            validators: {
                                notEmpty: {
                                    message: "Mobile is required",
                                },
                            },
                        },
                        role: {
                            validators: {
                                notEmpty: {
                                    message: "Role is required",
                                },
                            },
                        },
                        username: {
                            validators: {
                                notEmpty: {
                                    message: "Username is required",
                                },
                            },
                        },
                        // password: {
                        //     validators: {
                        //         notEmpty: {
                        //             message: "Password is required",
                        //         },
                        //     },
                        // },
                        email: {
                            validators: {
                                notEmpty: {
                                    message: "Email is required",
                                },
                            },
                        },
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        submitButton: new FormValidation.plugins.SubmitButton(),
                        bootstrap: new FormValidation.plugins.Bootstrap5({
                            rowSelector: ".fv-row",
                            eleInvalidClass: "",
                            eleValidClass: "",
                        }),
                    },
                })),
                t.addEventListener("click", function (e) {
                    e.preventDefault(),
                        n &&
                            n.validate().then(function (e) {
                                t.setAttribute("data-kt-indicator","on");
                                t.disabled = !0;
                                if(e=='Valid')
                                {
                                    // setTimeout(function () {
                                    t.removeAttribute("data-kt-indicator"),
                                    t.disabled = !1;
                                    Swal.fire({
                                        text: "Form has been successfully submitted!",
                                        icon: "success",
                                        buttonsStyling: !1,
                                        confirmButtonText:
                                            "Ok, got it!",
                                        customClass: {
                                            confirmButton:
                                                "btn btn-primary",
                                        },
                                    }).then(function (t) {
                                        t.isConfirmed;// && o.hide();
                                    });
                                    // }, 2e3);
                                }
                                // else
                                // {
                                //     Swal.fire({
                                //         text: "Sorry, looks like there are some errors detected, please try again.",
                                //         icon: "error",
                                //         buttonsStyling: !1,
                                //         confirmButtonText: "Ok, got it!",
                                //         customClass: {
                                //             confirmButton:
                                //                 "btn btn-primary",
                                //         },
                                //     });
                                // }
                                console.log("validated!");
                                console.log(e);
                            });
                }),
                $(t.querySelector('[name="gender"]')).on(
                    "change",
                    function () {
                        n.revalidateField("gender");
                    }
                ),
                $(t.querySelector('[name="role"]')).on(
                    "change",
                    function () {
                        n.revalidateField("role");
                    }
                ));
        },
    };
})();
KTUtil.onDOMContentLoaded(function () {
    KTAccountSettingsProfileDetails.init();
});
