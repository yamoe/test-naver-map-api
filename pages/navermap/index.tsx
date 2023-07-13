'use client'
import Script from 'next/script'
import React from "react";

export default function Index() {
    return (
        <div>
            <div id="map" style={{width: '800px', height: '800px'}}/>
            <Script
                src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
                onLoad={DrawMap}></Script>
        </div>
    )
}

function DrawMap() {
    const center: naver.maps.LatLng = new naver.maps.LatLng(37.3595704, 127.105399);
    let map: naver.maps.Map = new naver.maps.Map('map', {
        center: center,
        zoom: 16
    });

    const path = [
        new naver.maps.LatLng(37.356415, 127.104535),
        new naver.maps.LatLng(37.359886, 127.104482),
        new naver.maps.LatLng(37.359911, 127.107368),
        new naver.maps.LatLng(37.363408, 127.107282),
    ]

    new naver.maps.Polyline({
        map: map,
        path: path,
        strokeWeight: 2,
        strokeColor: '#5347AA'
    });

    for (const position of path) {
        new naver.maps.Marker({
            map: map,
            position: position,
            title: `${position.lat()}, ${position.lng()}`
        });
    }

}
