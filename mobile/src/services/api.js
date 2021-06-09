import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.109:3333'
});

export default api;

/*
IOS com emulador: localhost
ios com fisico: Ip da máquina
Android com Emulador: localhost (adb reverse)
Android com Emulador: 10.0.2.2( Android Studio)
Android com Emulador: 10.0.3.2(Genymotion)
Android com físico: Ip da máquina (192.168.0.109)
*/