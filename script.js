const toolTip = document.getElementById('tooltip');
var images=document.getElementsByTagName("img")
const fenêtres = document.querySelectorAll('.fenetre');

const videoContainer = document.getElementById('videoContainer');
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');

for (var i=0; i<images.length;i++){
    mon_image=images[i];
    mon_image.addEventListener('click',video)
}


function video(evt){
    if (this.id==1){
        showVideo("video_alexis.mp4")
    }
    else if (this.id==2){
        showVideo("video_cerise.mp4")
    }
    else if (this.id==3){
        showVideo("video_chariots.mp4")
    }
    else if (this.id==4){
        showVideo("video_chien.mp4")
    }
    else if (this.id==5){
        showVideo("video_classement.mp4")
    }
    else if (this.id==6){
        showVideo("video_courses.mp4")
    }
    else if (this.id==7){
        showVideo("video_elisa.mp4")
    }
    else if (this.id==10){
        showVideo("video_gabin.mp4")
    }
    else if (this.id==11){
        showVideo("video_klara.mp4")
    }
    else if (this.id==12){
        showVideo("video_lulu.mp4")
    }
    else if (this.id==14){
        showVideo("video_mae.mp4")
    }
    else if (this.id==18){
        showVideo("video_manelle.mp4")
    }
    else if (this.id==19){
        showVideo("video_miaou.mp4")
    }
    else if (this.id==22){
        showVideo("video_naomi.mp4")
    }
    else if (this.id==23){
        showVideo("video_poursuite.mp4")
    }
    else if (this.id==24){
        showVideo("video_romane.mp4")
    }
    else if (this.id==25){
        showVideo("video_supershy.mp4")
    }
    else if (this.id==28){
        showVideo("video_tom.mp4")
    }
    else if (this.id==29){
        showVideo("video_lar.mp4")
    }
    else if (this.id==30){
        showVideo("video_tilou.mp4")
    }
    else if (this.id==31){
        showVideo("video_bel.mp4")
    }
}

function showVideo(videoFile) {
    videoSource.src = videoFile;
    videoPlayer.load();
    videoContainer.style.display = 'block';
}


videoContainer.addEventListener('click', () => {
    videoContainer.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.currentTime = 0; // Remettre la vidéo au début
});

closeModal.addEventListener('click', () => {
    videoModal.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
});