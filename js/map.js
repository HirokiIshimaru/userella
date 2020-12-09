'use strict';
{
    window.onload = () =>{
        let map = L.map('map');
        L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',{
            maxZoom: 13,
            attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">大阪駅</a>'
        }).addTo(map);

        function currentLocation(e){
            L.marker(e.latlng).addTo(map).bindPopup("現在地").openPopup();
            // L.marker(e.latlng).addTo(map).bindPopup("大阪駅").openPopup();
        }

        function notCurrentLocation(e){
            alert("現在地を取得できませんでした")
        }

        map.on('locationfound', currentLocation);
        map.on('locationerror', notCurrentLocation);

        map.locate({setView: true, maxZoom: 13, timeout: 20000});
    }
}