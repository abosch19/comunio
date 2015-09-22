var jugadors = [
	{
	"nom": "Alex",
	"dorsal": 11,
	"punts": 0
	},
	{
	"nom": "Alberto",
	"dorsal": 5,
	"punts": 2
	},
	{
	"nom": "Jorge",
	"dorsal": 3,
	"punts": -4
	},
	{
	"nom": "Jesus",
	"dorsal": 6,
	"punts": 1
	}	
]


$(document).ready(function () {
	
	var comunio = jugadors.sort(function (a,b) {
		return parseFloat(b.punts) - parseFloat(a.punts)
		})
	jugadors.forEach(function (data) {
		$(".cabecera").append("<tr><td>" + data.dorsal + "</td><td>" + data.nom + "</td><td>"+ data.punts
 + "</td></tr>")
	})

});
