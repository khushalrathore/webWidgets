import React, { useEffect, useState } from 'react';

function DigClock() {
  const arrayUrl = [
    'https://wallpapers.com/images/featured/jujutsu-kaisen-4k-hccbh0fp7rl24yd0.jpg',
    'https://wallpaper.dog/large/20493382.jpg',
    'https://www.pixel4k.com/wp-content/uploads/2021/03/vinland-saga-assassins-creed-valhalla-4k_1615186065.jpg',
    'https://images3.alphacoders.com/116/1163424.jpg',
    'https://www.pixel4k.com/wp-content/uploads/2020/02/warframe-2020_1581272758.jpg',
    'https://www.gamewallpapers.com/wallpapers_slechte_compressie/wallpaper_warhammer_40000_boltgun_01_1920x1080.jpg',
    'https://www.pixel4k.com/wp-content/uploads/2019/06/4k-borderlands-3-2019_1560534906.jpg',
    'https://wallpapercave.com/wp/wp11307879.jpg',
    'https://media.contentapi.ea.com/content/dam/apex-legends/common/map-comparison-slider-assets/harvester-before.jpg',
    'https://cdn.oneesports.gg/cdn-data/2024/04/Apex_Legends_Worlds_Edge_map_guide.jpg',
  ];

  const index = Math.floor(Math.random() * (arrayUrl.length - 1));
  const [backgroundUrl, setBackgroundUrl] = useState(arrayUrl[index]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const [time, setTime] = useState(new Date());


  function formatTime() {
    function tf(x) {
      return (x < 10 ? `0${x}` : x);
    }
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    return `${tf(hour)}:${tf(min)}:${tf(sec)}`;
  }


  const styles = {
    body: {
      background: `url(${backgroundUrl}) no-repeat center center`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflowY : 'clip'
    }
  };

  return (
    <div style={styles.body}>
      <div className="clockContainer">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </div>
  );
}

export default DigClock;
