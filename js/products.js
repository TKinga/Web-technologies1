$(document).ready(function () {
    var table = $("#index").DataTable({
      lengthMenu: [
        [5, 10, 20, 30],
        [5, 10, 20, 30],
      ],
      language: {
        url: "https://cdn.datatables.net/plug-ins/1.11.5/i18n/hu.json",
      },
    });

    $.ajax({
      url: "http://127.0.0.1:5500/json/products.json",
      dataType: "json",
      success: function (data) {
        $.each(data, function (index, item) {
          table.row.add([
            item.Név,
            item.Típus,
            item.Ár
          ]).draw();
        });
      },
      error: function (xhr, status, error) {
        console.error("Error loading data:", status, error);
      },
    });
  });