"use strict";
var KTAccountSettingsProfileDetails = (function () {
    var e, t, s;
    return {
        init: function () {
            (e = document.getElementById("kt_account_profile_details_form")) &&
                (e.querySelector("#kt_account_profile_details_submit"),
                // (s = document.getElementById("#kt_account_profile_details_submit")),
                (t = FormValidation.formValidation(e, {
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
                e.addEventListener("click", function (ee) {
                    ee.preventDefault(),
                        t &&
                            t.validate().then(function (ee) {
                                console.log("validated!"),
                                    "Valid" == ee
                                        ? (e.setAttribute(
                                              "data-kt-indicator",
                                              "on"
                                          ),
                                          (e.disabled = !0),
                                          setTimeout(function () {
                                              e.removeAttribute(
                                                  "data-kt-indicator"
                                              ),
                                                  (e.disabled = !1),
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
                                                      e.isConfirmed && o.hide();
                                                  });
                                          }, 2e3))
                                        : Swal.fire({
                                              text: "Sorry, looks like there are some errors detected, please try again.",
                                              icon: "error",
                                              buttonsStyling: !1,
                                              confirmButtonText: "Ok, got it!",
                                              customClass: {
                                                  confirmButton:
                                                      "btn btn-primary",
                                              },
                                          });
                            });
                }),
                $(e.querySelector('[name="gender"]')).on(
                    "change",
                    function () {
                        t.revalidateField("gender");
                    }
                ),
                $(e.querySelector('[name="role"]')).on(
                    "change",
                    function () {
                        t.revalidateField("role");
                    }
                ));
        },
    };
})();
KTUtil.onDOMContentLoaded(function () {
    KTAccountSettingsProfileDetails.init();
});
