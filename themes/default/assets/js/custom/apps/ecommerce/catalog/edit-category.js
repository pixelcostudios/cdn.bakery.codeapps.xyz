"use strict";
var KTAppSaveCategory = (function () {
    const 
        t = () => {
            document
                .querySelectorAll(
                    '[data-kt-ecommerce-catalog-add-category="condition_type"]'
                )
                .forEach((e) => {
                    $(e).hasClass("select2-hidden-accessible") ||
                        $(e).select2({ minimumResultsForSearch: -1 });
                });
            document
                .querySelectorAll(
                    '[data-kt-ecommerce-catalog-add-category="condition_equals"]'
                )
                .forEach((e) => {
                    $(e).hasClass("select2-hidden-accessible") ||
                        $(e).select2({ minimumResultsForSearch: -1 });
                });
        };
    return {
        init: function () {
            ["#kt_add_category_description"].forEach((e) => {
                let t = document.querySelector(e);
                t &&
                    (t = new Quill(e, {
                        modules: {
                            toolbar: [
                                [{ header: [1, 2, !1] }],
                                ["bold", "italic", "underline"],
                                ["image", "code-block"],
                            ],
                        },
                        placeholder: "Type your text here...",
                        theme: "snow",
                    }));
                    t.on('text-change', function(delta, oldDelta, source) {
                        console.log(t.container.firstChild.innerHTML)
                        $('#kt_add_category_description_detail').val(t.container.firstChild.innerHTML);
                    });
            }),
            ["#kt_add_category_meta_description"].forEach((e) => {
                let tt = document.querySelector(e);
                tt &&
                    (tt = new Quill(e, {
                        modules: {
                            toolbar: [
                                [{ header: [1, 2, !1] }],
                                ["bold", "italic", "underline"],
                                ["image", "code-block"],
                            ],
                        },
                        placeholder: "Type your text here...",
                        theme: "snow",
                    }));
                    tt.on('text-change', function(delta, oldDelta, source) {
                        console.log(tt.container.firstChild.innerHTML)
                        $('#kt_add_category_meta_description_detail').val(tt.container.firstChild.innerHTML);
                    });
            }),
                ["#kt_add_category_meta_keywords"].forEach((e) => {
                    const t = document.querySelector(e);
                    t && new Tagify(t);
                }),
                t(),
                (() => {
                    const e = document.getElementById(
                            "kt_add_category_status"
                        ),
                        t = document.getElementById(
                            "kt_add_category_status_select"
                        ),
                        o = ["bg-success", "bg-warning", "bg-danger"];
                    $(t).on("change", function (t) {
                        switch (t.target.value) {
                            case "published":
                                e.classList.remove(...o),
                                    e.classList.add("bg-success"),
                                    r();
                                break;
                            case "scheduled":
                                e.classList.remove(...o),
                                    e.classList.add("bg-warning"),
                                    c();
                                break;
                            case "unpublished":
                                e.classList.remove(...o),
                                    e.classList.add("bg-danger"),
                                    r();
                        }
                    });
                    const a = document.getElementById(
                        "kt_add_category_status_datepicker"
                    );
                    $("#kt_add_category_status_datepicker").flatpickr(
                        { enableTime: !0, dateFormat: "Y-m-d H:i" }
                    );
                    const c = () => {
                            a.parentNode.classList.remove("d-none");
                        },
                        r = () => {
                            a.parentNode.classList.add("d-none");
                        };
                })(),
                (() => {
                    const e = document.querySelectorAll(
                            '[name="method"][type="radio"]'
                        ),
                        t = document.querySelector(
                            '[data-kt-ecommerce-catalog-add-category="auto-options"]'
                        );
                    e.forEach((e) => {
                        e.addEventListener("change", (e) => {
                            "1" === e.target.value
                                ? t.classList.remove("d-none")
                                : t.classList.add("d-none");
                        });
                    });
                })(),
                (() => {
                    let e;
                    const t = document.getElementById(
                            "kt_add_category_form"
                        ),
                        o = document.getElementById(
                            "kt_add_category_submit"
                        );
                    (e = FormValidation.formValidation(t, {
                        fields: {
                            cat_title: {
                                validators: {
                                    notEmpty: {
                                        message: "Category name is required",
                                    },
                                },
                            },
                        },
                        plugins: {
                            trigger: new FormValidation.plugins.Trigger(),
                            bootstrap: new FormValidation.plugins.Bootstrap5({
                                rowSelector: ".fv-row",
                                eleInvalidClass: "",
                                eleValidClass: "",
                            }),
                        },
                    })),
                        o.addEventListener("click", (a) => {
                            a.preventDefault(),
                                e &&
                                    e.validate().then(function (e) {
                                        console.log("validated!"),
                                            "Valid" == e
                                                ? (o.setAttribute(
                                                      "data-kt-indicator",
                                                      "on"
                                                  ),
                                                  (o.disabled = !0),
                                                  setTimeout(function () {
                                                      o.removeAttribute(
                                                          "data-kt-indicator"
                                                      ),
                                                          Swal.fire({
                                                              text: "Form has been successfully submitted!",
                                                              icon: "success",
                                                              buttonsStyling:
                                                                  !1,
                                                              confirmButtonText:
                                                                  "Ok, got it!",
                                                              customClass: {
                                                                  confirmButton:
                                                                      "btn btn-primary",
                                                              },
                                                          }).then(function (e) {
                                                              e.isConfirmed &&
                                                                  ((o.disabled =
                                                                      !1),
                                                                  (window.location =
                                                                      t.getAttribute(
                                                                          "data-kt-redirect"
                                                                      )));
                                                          });
                                                  }, 2e3))
                                                : Swal.fire({
                                                      text: "Sorry, looks like there are some errors detected, please try again.",
                                                      icon: "error",
                                                      buttonsStyling: !1,
                                                      confirmButtonText:
                                                          "Ok, got it!",
                                                      customClass: {
                                                          confirmButton:
                                                              "btn btn-primary",
                                                      },
                                                  });
                                    });
                        });
                })();
        },
    };
})();
KTUtil.onDOMContentLoaded(function () {
    KTAppSaveCategory.init();
});
$(document).on("click", ".check_images", function() {
    $(this).closest('.gallery').find(':checkbox').prop('checked', this.checked);
  });
  //console.log(segment_3);
  function FeaturedImages() {
    // alert("dfff");
    var e, t;
    var n = 0;
    var r = $('.images-check');
    // alert(r.length);
    if (r.length == null) {
      toastr.options = [];
      toastr.warning('Please select one check box!', '', []);
      return false
    } else {
      
      for (var i = 0; i < r.length; i++) {
          if (r[i].checked) {
              n++;
              e = r[i].value;
              t = e.split(",");
              //alert(t[2]);
              console.log("featured:"+t[0]);
            //   console.log("type : "+segment_3);
            //   console.log("type : "+segment_2);
              // if(post_id=="")
              // {
              //   var post_id = "";
              // }
              // else
              // {
              //   var post_id = post_id;
              // }
              // console.log(url_Base + "post/featured/"+post_id+"/" + t[0]);
              $.ajax({
                url: url_Base + "post/featured/"+post_id+"/" + t[0]+"?type="+cat_type,
                data: {
                    name: name
                },
                success: function(data) {
                  load_featured();
                  toastr.options = [];
                  toastr.success('Successfully set featured images', '', []);
                }
            })
              
          }
      }
    }
    if (n == 0) {
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
  }
  
  function AddImages() {
    // alert("dfff");
    var e, t;
    var n = 0;
    var r = $('.images-check');
    // alert(r.length);
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            // alert(t[2]);
  
            // if (typeof ClassicEditor !== "undefined") {
            //   ClassicEditor.create(
            //   document.querySelector("#ckEditorClassic")
            //   ).then( editor => {
            //     editor.insertHtml(t[2]);
            // } ).catch(
            //     function (error) { }
            //   );
            // // }
            CKEDITOR.instances.content_id.insertHtml(t[2]);
            //ClassicEditor.model.insertContent(text, ckEditor.model.document.selection);
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                // alert(t[2]);
                // if (typeof ClassicEditor !== "undefined") {
                //   ClassicEditor.create(
                //   document.querySelector("#ckEditorClassic")
                //   ).then( editor => {
                //     editor.insertHtml(t[2]);
                // } ).catch(
                //     function (error) { }
                //   );
                // }
                CKEDITOR.instances.content_id.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
  }
  
  function Deleted_Images() {
    var e, t;
    var n = 0;
    var r = $('.images-check');
    // alert(r.length);
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            // alert(t[3]);
            // CKEDITOR.instances.ckeditorclassic.insertHtml(t[2])
            // var id = $(this).data("id");
            // var type = $(this).data('type');
            // alert(url_Base + "post/delete/" + t[3] + "/" + t[0]);
            var name = t[1]; //$(this).data('name');
            $.ajax({
                url: url_Base + "post/delete/" + t[3] + "/" + t[0],
                data: {
                    name: name
                },
                success: function(data) {
                    load_images();
                    // load_icon();
                    // load_thumb();
                    load_background();
                    toastr.success('Images has been deleted!', '', []);
                }
            })
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                // alert(t[3]);
                // alert(url_Base + "post/delete/" + t[3] + "/" + t[0]);
                var name = t[1]; //$(this).data('name');
                $.ajax({
                    url: url_Base + "post/delete/" + t[3] + "/" + t[0],
                    data: {
                        name: name
                    },
                    success: function(data) {
                        load_images();
                        // load_icon();
                        // load_thumb();
                        load_background();
                        toastr.success('Images has been deleted!', '', []);
                    }
                })
                // CKEDITOR.instances.ckeditorclassic.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        // alert("Please select at least one check box");
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
  }
  function Deleted_Background() {
    var e, t;
    var n = 0;
    var r = $('.images-check');
    // alert(r.length);
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            // alert(t[3]);
            // CKEDITOR.instances.ckeditorclassic.insertHtml(t[2])
            // var id = $(this).data("id");
            // var type = $(this).data('type');
            // alert(url_Base + "post/delete/" + t[3] + "/" + t[0]);
            var name = t[1]; //$(this).data('name');
            $.ajax({
                url: url_Base + "post/delete/" + t[3] + "/" + t[0],
                data: {
                    name: name
                },
                success: function(data) {
                    // load_images();
                    // load_icon();
                    // load_thumb();
                    load_background();
                    toastr.success('Images has been deleted!', '', []);
                }
            })
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                // alert(t[3]);
                // alert(url_Base + "post/delete/" + t[3] + "/" + t[0]);
                var name = t[1]; //$(this).data('name');
                $.ajax({
                    url: url_Base + "post/delete/" + t[3] + "/" + t[0],
                    data: {
                        name: name
                    },
                    success: function(data) {
                        // load_images();
                        // load_icon();
                        // load_thumb();
                        load_background();
                        toastr.success('Images has been deleted!', '', []);
                    }
                })
                // CKEDITOR.instances.ckeditorclassic.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        // alert("Please select at least one check box");
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
  }
  function Deleted_Files() {
    var e, t;
    var n = 0;
    var r = $('.files-check');
    // alert(r.length);
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            // alert(t[3]);
            var name = t[1]; //$(this).data('name');
            $.ajax({
                url: url_Base + "post/delete/" + t[3] + "/" + t[0],
                data: {
                    name: name
                },
                success: function(data) {
                    load_files();
                    toastr.success('Files has been deleted!', '', []);
                }
            })
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                // alert(t[3]);
                var name = t[1]; //$(this).data('name');
                $.ajax({
                    url: url_Base + "post/delete/" + t[3] + "/" + t[0],
                    data: {
                        name: name
                    },
                    success: function(data) {
                        load_files();
                        toastr.success('Files has been deleted!', '', []);
                    }
                })
            }
        }
    }
    if (n == 0) {
        // alert("Please select at least one check box");
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
  }
  function Deleted_PDF() {
    var e, t;
    var n = 0;
    var r = $('.pdf-check');
    // alert(r.length);
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            var name = t[1]; //$(this).data('name');
            $.ajax({
                url: url_Base + "post/delete/" + t[3] + "/" + t[0],
                data: {
                    name: name
                },
                success: function(data) {
                    load_pdf();
                    toastr.success('PDF has been deleted!', '', []);
                }
            })
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                var name = t[1]; //$(this).data('name');
                $.ajax({
                    url: url_Base + "post/delete/" + t[3] + "/" + t[0],
                    data: {
                        name: name
                    },
                    success: function(data) {
                        load_pdf();
                        toastr.success('PDF has been deleted!', '', []);
                    }
                })
            }
        }
    }
    if (n == 0) {
        // alert("Please select at least one check box");
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
  }