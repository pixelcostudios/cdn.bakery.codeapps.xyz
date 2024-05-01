"use strict";
var KTUsersList = (function () {
    var e,
        t,
        n,
        r,
        o = document.getElementById("kt_table_users"),
        c = () => {
            o.querySelectorAll(
                '[data-kt-users-table-filter="delete_row"]'
            ).forEach((t) => {
                t.addEventListener("click", function (t) {
                    // console.log($(t).data("id"));
                    // console.log(t.querySelectorAll('[data-id]'));

                    t.preventDefault();

                    $(document).on("click", ".btn-delete", function() {
                        var role_id = $(this).data('id');
                        var role_name = $(this).data('name');
                        // console.log(url_Base+"api/web/user_role_delete/"+role_id);
                        Swal.fire({
                            text: "Are you sure you want to delete "+title+" " + role_name + "?",
                            icon: "warning",
                            showCancelButton: !0,
                            buttonsStyling: !1,
                            confirmButtonText: "Yes, delete!",
                            cancelButtonText: "No, cancel",
                            customClass: {
                                confirmButton: "btn fw-bold btn-danger",
                                cancelButton:
                                    "btn fw-bold btn-active-light-primary",
                            },
                        }).then(function (t) {
                            if(t.value==true)
                            {
                                var delete_list = {
                                    "url": url_Base+"outbound/script_p_delete/"+role_id,
                                    "method": "POST",
                                    "headers": {
                                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                    },
                                    "timeout": 0,
                                };
                                $.ajax(delete_list).done(function (response) 
                                {
                                    if(response.status==200)
                                    {
                                        Swal.fire({
                                            text: "You have deleted "+title+" " + role_name + "!.",
                                            icon: "success",
                                            buttonsStyling: !1,
                                            confirmButtonText: "Ok, got it!",
                                            customClass: {
                                                confirmButton: "btn fw-bold btn-primary",
                                            },
                                        })
                                        .then(function () {
                                            //   e.row($(n)).remove().draw();
                                            if ($.fn.DataTable.isDataTable(o)) {
                                                $(o).DataTable().clear().destroy();
                                            }   
                                            // $(o).empty();
                                            // $(o).DataTable().clear().destroy();
                                            $(o).DataTable({
                                                info: !1,
                                                order: [],
                                                ajax: url_Base+"outbound/script_json",
                                                pageLength: 10,
                                                lengthChange: !1,
                                                columnDefs: [
                                                    { orderable: !1, targets: 0 },
                                                    //{ orderable: !1, targets: 3 },
                                                ],
                                            }).on("draw", function () {
                                            });
                                        })
                                        .then(function () {
                                            a();
                                        });
                                    }
                                    else
                                    {
                                        Swal.fire({
                                            text: title+" "+ role_name + " was not deleted.",
                                            icon: "error",
                                            buttonsStyling: !1,
                                            confirmButtonText: "Ok, got it!",
                                            customClass: {
                                                confirmButton: "btn fw-bold btn-primary",
                                            },
                                        });
                                    }

                                });
                            }
                            else
                            {
                                Swal.fire({
                                    text: title+" "+ role_name + " was not deleted.",
                                    icon: "error",
                                    buttonsStyling: !1,
                                    confirmButtonText: "Ok, got it!",
                                    customClass: {
                                        confirmButton: "btn fw-bold btn-primary",
                                    },
                                });
                            }
                        });
                        
                    });
                });
            });
        },
        l = () => {
            const c = o.querySelectorAll('[type="checkbox"]');
            (t = document.querySelector('[data-kt-user-table-toolbar="base"]')),
                (n = document.querySelector(
                    '[data-kt-user-table-toolbar="selected"]'
                )),
                (r = document.querySelector(
                    '[data-kt-user-table-select="selected_count"]'
                ));
            const s = document.querySelector(
                '[data-kt-user-table-select="delete_selected"]'
            );
            c.forEach((e) => {
                e.addEventListener("click", function () {
                    setTimeout(function () {
                        a();
                    }, 50);
                });
            }),
            s.addEventListener("click", function () {
                // console.log("cliecked");
                // var rc = $('.form-check-input');
                // let array = []; 
                // rc.each(function() { 
                //     array.push($(this).val()); 
                // }); 

                Swal.fire({
                    text: "Are you sure you want to delete selected "+title+"?",
                    icon: "warning",
                    showCancelButton: !0,
                    buttonsStyling: !1,
                    confirmButtonText: "Yes, delete!",
                    cancelButtonText: "No, cancel",
                    customClass: {
                        confirmButton: "btn fw-bold btn-danger",
                        cancelButton:
                            "btn fw-bold btn-active-light-primary",
                    },
                }).then(function (t) {
                    let array = $("input:checkbox[name=post_id]:checked")
                        .map(function (){
                        return $(this).val();
                    }).toArray();

                    console.log(array);

                    if (array.length) {
                        var formData = {
                            id: array
                        };

                        // console.log(formData);Role was not deleted.

                        var delete_list = {
                            "method": "POST",
                            "url": url_Base+"outbound/script_delete_array",
                            "data":formData,
                            "dataType": "json",
                            "encode": true,
                            "headers": {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            "timeout": 0,
                        };
                        $.ajax(delete_list).done(function (response) 
                        {
                            // console.log(response);
                            if(response.status==200)
                            {
                                Swal.fire({
                                    text: "You have deleted "+title+" !.",
                                    icon: "success",
                                    buttonsStyling: !1,
                                    confirmButtonText: "Ok, got it!",
                                    customClass: {
                                        confirmButton: "btn fw-bold btn-primary",
                                    },
                                })
                                .then(function () {
                                    //   e.row($(n)).remove().draw();
                                    //table4.ajax.reload(null, false);
                                    if ($.fn.DataTable.isDataTable(o)) {
                                        $(o).DataTable().clear().destroy();
                                    }   
                                    // $(o).empty();
                                    // $(o).DataTable().clear().destroy();
                                    $(o).DataTable({
                                        info: !1,
                                        order: [],
                                        ajax: url_Base+"outbound/script_json",
                                        pageLength: 10,
                                        lengthChange: !1,
                                        columnDefs: [
                                            { orderable: !1, targets: 0 },
                                            //{ orderable: !1, targets: 3 },
                                        ],
                                    });
                                })
                                .then(function () {
                                    a();
                                });
                            }
                            else
                            {
                                Swal.fire({
                                    text: title+" was not deleted.",
                                    icon: "error",
                                    buttonsStyling: !1,
                                    confirmButtonText: "Ok, got it!",
                                    customClass: {
                                        confirmButton: "btn fw-bold btn-primary",
                                    },
                                });
                            }
                            t.dismiss
                        });
                    }
                    else
                    {
                        Swal.fire({
                            text: title+" was not deleted.",
                            icon: "error",
                            buttonsStyling: !1,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn fw-bold btn-primary",
                            },
                        });
                    }
                });
            });
        };
    const a = () => {
        const e = o.querySelectorAll('tbody [type="checkbox"]');
        let c = !1,
            l = 0;
        e.forEach((e) => {
            e.checked && ((c = !0), l++);
        }),
            c
                ? ((r.innerHTML = l),
                  t.classList.add("d-none"),
                  n.classList.remove("d-none"))
                : (t.classList.remove("d-none"), n.classList.add("d-none"));
    };
    return {
        init: function () {
            o &&
                (o.querySelectorAll("tbody tr").forEach((e) => {
                    const t = e.querySelectorAll("td"),
                        n = t[3].innerText.toLowerCase();
                    let r = 0,
                        o = "minutes";
                    n.includes("yesterday")
                        ? ((r = 1), (o = "days"))
                        : n.includes("mins")
                        ? ((r = parseInt(n.replace(/\D/g, ""))),
                          (o = "minutes"))
                        : n.includes("hours")
                        ? ((r = parseInt(n.replace(/\D/g, ""))), (o = "hours"))
                        : n.includes("days")
                        ? ((r = parseInt(n.replace(/\D/g, ""))), (o = "days"))
                        : n.includes("weeks") &&
                          ((r = parseInt(n.replace(/\D/g, ""))), (o = "weeks"));
                    const c = moment().subtract(r, o).format();
                    t[3].setAttribute("data-order", c);
                    const l = moment(
                        t[5].innerHTML,
                        "DD MMM YYYY, LT"
                    ).format();
                    t[5].setAttribute("data-order", l);
                }),
                (e = $(o).DataTable({
                    info: !1,
                    order: [],
                    ajax: url_Base+"outbound/script_json",
                    pageLength: 10,
                    lengthChange: !1,
                    columnDefs: [
                        { orderable: !1, targets: 0 },
                        //{ orderable: !1, targets: 3 },
                    ],
                })).on("draw", function () {
                    l(), c(), a();
                }),
                l(),
                document
                    .querySelector('[data-kt-user-table-filter="search"]')
                    .addEventListener("keyup", function (t) {
                        e.search(t.target.value).draw();
                        console.log(t.target.value);
                    }),
                document
                    .querySelector('[data-kt-user-table-filter="reset"]')
                    .addEventListener("click", function () {
                        document
                            .querySelector('[data-kt-user-table-filter="form"]')
                            .querySelectorAll("select")
                            .forEach((e) => {
                                $(e).val("").trigger("change");
                            }),
                            e.search("").draw();
                    }),
                c(),
                (() => {
                    const t = document.querySelector(
                            '[data-kt-user-table-filter="form"]'
                        ),
                        n = t.querySelector(
                            '[data-kt-user-table-filter="filter"]'
                        ),
                        r = t.querySelectorAll("select");
                    n.addEventListener("click", function () {
                        var status = $('.status').val();
                        if ($.fn.DataTable.isDataTable(o)) {
                            $(o).DataTable().clear().destroy();
                        }   
                        // $(o).empty();
                        // $(o).DataTable().clear().destroy();
                        $(o).DataTable({
                            info: !1,
                            order: [],
                            ajax: url_Base+"outbound/script_json?status="+status,
                            pageLength: 10,
                            lengthChange: !1,
                            columnDefs: [
                                { orderable: !1, targets: 0 },
                                //{ orderable: !1, targets: 3 },
                            ],
                        });
                        // var t = "";
                        // r.forEach((e, n) => {
                        //     e.value &&
                        //         "" !== e.value &&
                        //         (0 !== n && (t += " "), (t += e.value));
                        // }),
                        //     e.search(t).draw();
                    });
                })());
        },
    };
})();
KTUtil.onDOMContentLoaded(function () {
    KTUsersList.init();
});
