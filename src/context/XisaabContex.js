"use client";
import React, { useContext, useEffect, useState } from "react";
const Datacontext = React.createContext();
export function Usedata() {
  return useContext(Datacontext);
}
export function DatacontextProvader({ children }) {
  const [xisaab, setxisaab] = useState(false);
  const allow_xisaab = () => setxisaab(!xisaab);
  const [Aclogin, setAclogin] = useState(false);
  const [Acsingup, setAcsingup] = useState(false);
  const [AcSako, setAcSako] = useState(false);
  const [alert, setalert] = useState(false);
  const [AcJawaab, setAcJawaab] = useState(false);
  const [AcLoading, setAcLoading] = useState(false);
  const [AcOverlay, setAcOverlay] = useState(false);
  const [navmobile, setnavmobile] = useState(false);
  const [dahab, setdahab] = useState(65.45);
  const [fido, setfido] = useState(0.75);

  // diyaarinta qaybta sako xisaabinta
  const [Nooc, setNooc] = useState("Lacag");
  // const [_docid, set_docid] = useState('');
  const [NDahab, setNDahab] = useState("24");
  const [N_Midho, setN_Midho] = useState("Hadhuudh");
  const [Xadiga, seXadiga] = useState("");
  const [Shardi1, setshardi1] = useState("");
  const [Shardi2, setshardi2] = useState("");
  const [Shardi3, setshardi3] = useState("");
  const [jawaab, setjawaab] = useState("");
  const [q_bixid, setq_bixid] = useState("");
  const [q_isku_jir, setq_isku_jir] = useState("50%");
  const [muti, setMufti] = useState("Waxaa Ka Baxaya");
  const Nisaab_dahab = 85;
  const Nisaabka_Fidada = 595;
  /*--------------- dahab ------------------*/
  const q_24ka = dahab && dahab.price_gram_24k?.toFixed(2);
  //const q_24ka = 56.56
  /*--------------- fido ------------------*/
  const q_Fidada = fido && fido.price_gram_24k?.toFixed(2);
  //const q_Fidada = 0.66

  // halbeegyada xisaabta Midhaha
  const Nisaabka_Midhaha = 612; // waa sida jumhuurka ayaa qaba in uu yahay 612  // 672 // 750  // 653
  const x_bilaa_kharash = 0.1;
  const x_kharaskha = 0.05;
  const isku_jir = 0.075;

  const ActivLogin = () => {
    Aclogin ? setAclogin(false) : setAclogin(true);
    setAcsingup(false);
    setnavmobile(false);
  };

  const ActiveSinup = () => {
    Acsingup ? setAcsingup(false) : setAcsingup(true);
    setAclogin(false);
  };

  const ActiveSako = () => {
    AcSako ? setAcSako(false) : setAcSako(true);
    setAcJawaab(false);
  };

  const ActiveAlert = () => {
    alert ? setalert(false) : setalert(true);
    console.log(alert);
  };

  const ActiveJawaab = () => {
    AcJawaab ? setAcJawaab(false) : setAcJawaab(true);
    setAcLoading(false);
  };

  const ActiveLoadin = () => {
    AcLoading ? setAcLoading(false) : setAcLoading(true);
    function timeload() {
      setTimeout(() => {
        setAcLoading(false);
        setAcJawaab(true);
      }, 3000);
    }
    timeload();
    setAcSako(false);
  };

  const ActivOverley = () => {
    AcOverlay ? setAcOverlay(false) : setAcOverlay(true);
    setAcSako(false);
  };

  const ActiveNavmobile = () => {
    navmobile ? setnavmobile(false) : setnavmobile(true);
  };

  // fetch IPA Dahab

  useEffect(() => {
    // var myHeaders = new Headers();
    // myHeaders.append("x-access-token", "goldapi-14sctkzonfjfa-io");
    // myHeaders.append("Content-Type", "application/json");
    // var requestOptions = {
    //   method: "GET",
    //   headers: myHeaders,
    //   redirect: "follow",
    // };
    // fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
    //   .then((response) => response.text())
    //   .then((response) => {
    //     var natiijda_ipa = JSON.parse(response);
    //     setdahab(natiijda_ipa);
    //   })
    //   .catch((error) => console.log("error", error));
    // fetch("https://www.goldapi.io/api/XAG/USD", requestOptions)
    //   .then((response) => response.text())
    //   .then((response) => {
    //     var natiijada_fido = JSON.parse(response);
    //     setfido(natiijada_fido);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // const url = "https://gold-price-live.p.rapidapi.com/get_metal_prices";
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "efac4100b6msh8f9a0894ecac0a7p1940afjsnaae2b5f60ce6",
    //     "X-RapidAPI-Host": "gold-price-live.p.rapidapi.com",
    //   },
    // };
    // fetch(url, options)
    //   .then((response) => response.text())
    //   .then((response) => {
    //     console.log(response);
    //   });
  }, []);

  // sako xisaabin bilow
  const Diyaariye = () => {
    Xisaabiye(Nooc, Xadiga, NDahab, q_24ka, q_Fidada);
    ActiveLoadin();
  };

  const Xisaabiye = (Nooca, Xadiga, nooc_dahab, Qiimo_24) => {
    const Xadid_nisaab = Qiimo_24 * Nisaab_dahab;
    const xadidka_nisaabka_fidada = q_Fidada * Nisaabka_Fidada;
    if (Nooc === "Lacag") {
      const pattern = /[^0-9.]/g;
      if (Xadiga.match(pattern)) {
        setMufti("Waa Qalad Waxaad Qortay");
        setjawaab(`Lama Xisaabin Karo `);
        setshardi1(`Lama Ogolo Waxii Aan Tiro Ahayn`);
        setshardi2(
          `Maxa xisaabin karno waxyaabahan hadaad qortay !@#$%^&*()_+ A-z`
        );
        setshardi3(`Sidoo Kale Lama Xisaabin Karro (Qoraal)`);
      } else {
        if (Xadiga >= Xadid_nisaab && Xadiga >= xadidka_nisaabka_fidada) {
          setMufti("Waxaa Ka Baxaya");
          const last_jawaab = Number(Xadiga / 40).toFixed(2);
          setjawaab(last_jawaab);
          setshardi1(`Waa Inay Tahay Lacagtu Dollar`);
          setshardi2(`Waa Inaad Sanad Haysay`);
          setshardi3(
            `Waxaa Laguugu Xisaabiyay Qiimaha Dahabka oo Maraya ${q_24ka} $`
          );
        } else if (Xadiga >= xadidka_nisaabka_fidada) {
          const last_jawaab_fido = Number(Xadiga / 40).toFixed(2);
          setMufti("Waxaa Ka Baxaya ");
          setjawaab(last_jawaab_fido);
          setshardi1(`Waa Inay Tahay Lacagtu Dollar`);
          setshardi2(`Waa Inaad Sanad Haysay`);
          setshardi3(`Waxaa Lagugu Xisabiyay Fido o maraysa ${q_Fidada} $`);
        } else {
          setMufti("Lacagtaadu Sako May Gaadhin");
          setjawaab(`Laguma Laha Sako ${Xadiga}`);
          setshardi1(
            `Lacagtu Waxay Sako Ku Gadhaa ${Number(Xadid_nisaab).toFixed(2)} $`
          );
          setshardi2(
            `Ama Fido Hadii Lagu Xisaabiyo ${Number(
              xadidka_nisaabka_fidada
            ).toFixed(2)} $`
          );
          setshardi3(`Waa Inaad Sanad Haysay`);
        }
      }
    } else if (Nooc === "Dahab") {
      const pattern = /[^0-9.]/g;
      if (Xadiga.match(pattern)) {
        setMufti("Waa Qalad Waxaad Qortay");
        setjawaab(`Lama Xisaabin Karo `);
        setshardi1(`Lama Ogolo Waxii Aan Tiro Ahayn`);
        setshardi2(
          `Maxa xisaabin karno waxyaabahan hadaad qortay !@#$%^&*()_+ A-z`
        );
        setshardi3(`Sidoo Kale Lama Xisaabin Karro (Qoraal)`);
      } else {
        if (nooc_dahab === "24") {
          if (Xadiga >= Nisaab_dahab) {
            const last_jawaab = Number(Xadiga / 40).toFixed(3);
            setMufti("Waxaa Ka Baxaya");
            setjawaab(last_jawaab);
            setshardi1(`Waa Inuu Yahay 100% Dahab Saafi Ah`);
            setshardi2(`Waa Inaad Sanad Haysay`);
            setshardi3(
              `Lacag Hadaad Ku Bixinayso Waa ${Number(
                last_jawaab * Qiimo_24
              ).toFixed(2)}$`
            );
          } else {
            setMufti("Dahabkagu Sako Ma Gaadhin");
            setjawaab(`Sako Laguma Laha ${Xadiga} `);
            setshardi1(
              `Nooca ${nooc_dahab} Waxa uu Ku Sako Gaadha ${Number(
                (Nisaab_dahab * 24) / nooc_dahab
              ).toFixed(2)} Giraam`
            );
            setshardi2(`Noocyada kale Waxay Ku Gadhaan Sako Qiimo Kale`);
            setshardi3(``);
          }
        } else if (nooc_dahab === "22") {
          let istikhlaas = Math.round((parseInt(Xadiga) * 22) / 24);
          if (istikhlaas >= Nisaab_dahab) {
            const last_jawaab = istikhlaas / 40;
            setMufti("Waxaa Ka Baxaya");
            setjawaab(last_jawaab);
            setshardi1(`Waa Inuu Yahay Nooca ${nooc_dahab} `);
            setshardi2(`Waa Inaad Sanad Haysay`);
            setshardi3(
              `Lacag Hadaad Ku Bixinayso Waa ${Number(
                last_jawaab * Qiimo_24
              ).toFixed(2)}$`
            );
          } else {
            setMufti("Dahabkagu Sako Ma Gaadhin");
            setjawaab(`Sako Laguma Laha ${Xadiga} `);
            setshardi1(
              `Nooca ${nooc_dahab} Wax U Ku Sako Gaadha ${Number(
                (Nisaab_dahab * 24) / nooc_dahab
              ).toFixed(2)} Giraam`
            );
            setshardi2(`Noocyada kale Waxay Ku Gadhaan Sako Qiimo Kale`);
            setshardi3(``);
          }
        } else if (nooc_dahab === "21") {
          let istikhlaas = Math.round((parseInt(Xadiga) * 21) / 24);
          if (istikhlaas >= Nisaab_dahab) {
            const last_jawaab = istikhlaas / 40;
            setMufti("Waxaa Ka Baxaya");
            setjawaab(last_jawaab);
            setshardi1(`Waa Inuu Yahay Nooca ${nooc_dahab} `);
            setshardi2(`Waa Inaad Sanad Haysay`);
            setshardi3(
              `Lacag Hadaad Ku Bixinayso Waa ${Number(
                last_jawaab * Qiimo_24
              ).toFixed(2)}$`
            );
          } else {
            setMufti("Dahabkagu Sako Ma Gaadhin");
            setjawaab(`Sako Laguma Laha ${Xadiga} `);
            setshardi1(
              `Nooca ${nooc_dahab} Wax U Ku Sako Gaadha ${Number(
                (Nisaab_dahab * 24) / nooc_dahab
              ).toFixed(2)} Giraam`
            );
            setshardi2(`Noocyada kale Waxay Ku Gadhaan Sako Qiimo Kale`);
            setshardi3(``);
          }
        } else if (nooc_dahab === "20") {
          let istikhlaas = Math.round((parseInt(Xadiga) * 20) / 24);
          if (istikhlaas >= Nisaab_dahab) {
            const last_jawaab = istikhlaas / 40;
            setMufti("Waxaa Ka Baxaya");
            setjawaab(last_jawaab);
            setshardi1(`Waa Inuu Yahay Nooca ${nooc_dahab} `);
            setshardi2(`Waa Inaad Sanad Haysay`);
            setshardi3(
              `Lacag Hadaad Ku Bixinayso Waa ${Number(
                last_jawaab * Qiimo_24
              ).toFixed(2)}$`
            );
          } else {
            setMufti("Dahabkagu Sako Ma Gaadhin");
            setjawaab(`Sako Laguma Laha ${Xadiga} `);
            setshardi1(
              `Nooca ${nooc_dahab} Wax U Ku Sako Gaadha ${Number(
                (Nisaab_dahab * 24) / nooc_dahab
              ).toFixed(2)} Giraam`
            );
            setshardi2(`Noocyada kale Waxay Ku Gadhaan Sako Qiimo Kale`);
            setshardi3(``);
          }
        } else if (nooc_dahab === "18") {
          let istikhlaas = Math.round((parseInt(Xadiga) * 18) / 24);
          if (istikhlaas >= Nisaab_dahab) {
            const last_jawaab = istikhlaas / 40;
            setMufti("Waxaa Ka Baxaya");
            setjawaab(last_jawaab);
            setshardi1(`Waa Inuu Yahay Nooca ${nooc_dahab} `);
            setshardi2(`Waa Inaad Sanad Haysay`);
            setshardi3(
              `Lacag Hadaad Ku Bixinayso Waa ${Number(
                last_jawaab * Qiimo_24
              ).toFixed(2)}$`
            );
          } else {
            setMufti("Dahabkagu Sako Ma Gaadhin");
            setjawaab(`Sako Laguma Laha ${Xadiga} `);
            setshardi1(
              `Nooca ${nooc_dahab} Wax U Ku Sako Gaadha  ${Number(
                (Nisaab_dahab * 24) / nooc_dahab
              ).toFixed(2)}  Giraam`
            );
            setshardi2(`Noocyada kale Waxay Ku Gadhaan Sako Qiimo Kale`);
            setshardi3(``);
          }
        }
      }
    } else if (Nooc === "Geel") {
      const pattern = /[^0-9]/g;
      if (Xadiga.match(pattern)) {
        setMufti("Waa Qalad Waxaad Qortay");
        setjawaab(`Lama Xisaabin Karo `);
        setshardi1(`Lama Ogolo Waxii Aan Tiro Ahayn`);
        setshardi2(
          `Maxa xisaabin karno waxyaabahan hadaad qortay !@#$%^&*()_+ A-z`
        );
        setshardi3(`Sidoo Kale Lama Xisaabin Karro (Qoraal)`);
      } else {
        if (Xadiga >= 5 && Xadiga < 10) {
          setMufti("Waxaa Ka Baxaya Adhi ");
          setjawaab(`Waana 1`);
          setshardi1(`Ido Wa Inu sanad U dhamaaday`);
          setshardi2(`Riyo Waa in Laba sano u dhamadeen`);
          setshardi3(`Lab Iyo Dhedig Waa Isku Mid`);
        } else if (Xadiga >= 10 && Xadiga < 15) {
          setMufti("Waxaa Ka Baxaya Adhi ");
          setjawaab(`Waana 2`);
          setshardi1(`Ido Wa Inu sanad U dhamaaday`);
          setshardi2(`Riyo Waa in Laba sano u dhamadeen`);
          setshardi3(`Waxaana lagu bixnaya Adhi`);
        } else if (Xadiga >= 15 && Xadiga < 20) {
          setMufti("Waxaa Ka Baxaya Adhi ");
          setjawaab(`Waana 3`);
          setshardi1(`Ido Wa Inu sanad U dhamaaday`);
          setshardi2(`Riyo Waa in Laba sano u dhamadeen`);
          setshardi3(`Waxaana lagu bixnaya Adhi`);
        } else if (Xadiga >= 20 && Xadiga < 25) {
          setMufti("Waxaa Ka Baxaya Adhi ");
          setjawaab(`Waana 4`);
          setshardi1(`Ido Wa Inu sanad U dhamaaday`);
          setshardi2(`Riyo Waa in Laba sano u dhamadeen`);
          setshardi3(`Waxaana lagu bixnaya Adhi`);
        } else if (Xadiga >= 25 && Xadiga < 36) {
          setMufti("Waxa Ka Baxaya Geel ");
          setjawaab(`Waana 1`);
          setshardi1(`Waa inuu galay Sanadkii labaad`);
          setshardi2(`Waa inuu yahay dhedig`);
          setshardi3(``);
        } else if (Xadiga >= 36 && Xadiga < 46) {
          setMufti("Waxa Ka Baxaya Geel ");
          setjawaab(`Waana 1`);
          setshardi1(`Waa inuu galay Sanadkii Sadexaad`);
          setshardi2(`Waa inuu yahay dhedig`);
          setshardi3(``);
        } else if (Xadiga >= 46 && Xadiga < 61) {
          setMufti("Waxa Ka Baxaya Geel ");
          setjawaab(`Waana 1`);
          setshardi1(`Waa inuu galay Sanadkii Afraad`);
          setshardi2(`Waa inuu yahay dhedig`);
          setshardi3(``);
        } else if (Xadiga >= 61 && Xadiga < 76) {
          setMufti("Waxa Ka Baxaya Geel ");
          setjawaab(`Waana 2`);
          setshardi1(`Waa inay galeen Sanadkii Labaaad`);
          setshardi2(`Waa inay dhedig Yihiin`);
          setshardi3(``);
        } else if (Xadiga >= 76 && Xadiga < 91) {
          setMufti("Waxa Ka Baxaya Geel ");
          setjawaab(`Waana 2`);
          setshardi1(`Waa inay galeen Sanadkii Afraad`);
          setshardi2(`Waa inay dhedig Yihiin`);
          setshardi3(``);
        } else if (Xadiga >= 91 && Xadiga < 121) {
          setMufti("Waxa Ka Baxaya Geel ");
          setjawaab(`Waana 3`);
          setshardi1(`Waa inay galeen Sanadkii Shanaad`);
          setshardi2(`Waa inay dhedig Yihiin`);
          setshardi3(``);
        } else if (Xadiga >= 120) {
          const last_jawaab = Xadiga / 40;
          console.log("Jawaabta ", last_jawaab);
          if (String(last_jawaab).indexOf(".") === -1) {
            setMufti("Waxa Ka Baxaya");
            setjawaab(`${last_jawaab}`);
            setshardi1(`Waa inay galeen Sanadkii Afraad`);
            setshardi2(`Waa inay dhedig Yihiin`);
            setshardi3(`Waa Inay Geel Yihiin`);
          } else {
            const j_Array = [];
            j_Array.push(String(last_jawaab).split("."));
            const lat_jawaab_arr = parseInt(j_Array[0].join());
            const jawaab_baaqi_arr = lat_jawaab_arr * 40;
            const bixin = jawaab_baaqi_arr / 40;
            setMufti("Waxa Ka Baxaya");
            setjawaab(`${bixin}`);
            setshardi1(`Waa inay galeen Sanadkii Sadexaad`);
            setshardi2(`Waa inay dhedig Yihiin`);
            setshardi3(`Waa Inay Geel Yihiin`);
          }
        } else {
          setMufti(`Sako Laguma Laha `);
          setjawaab(`sako ma gaadhin ${Xadiga}`);
          setshardi1(`Geelu waxay ku sako gadhaa 5 Neef`);
          setshardi2(`Waa inaad sanad haysay`);
          setshardi3(``);
        }
      }
    } else if (Nooc === "Lo,a") {
      const pattern = /[^0-9]/g;
      if (Xadiga.match(pattern)) {
        setMufti("Waa Qalad Waxaad Qortay");
        setjawaab(`Lama Ogola Wax (.) ah qor Tirada inta `);
        setshardi1(`Lama Ogolo Waxii Aan Tiro Ahayn`);
        setshardi2(
          `Maxa xisaabin karno waxyaabahan hadaad qortay !@#$%^&*()_+ A-z`
        );
        setshardi3(`Sidoo Kale Lama Xisaabin Karro (string)`);
      } else {
        if (Xadiga >= 30 && Xadiga < 40) {
          setMufti("Waxaa Ka Baxay");
          setjawaab(`1`);
          setshardi1(`Waa Inuu Galay Sanadkii Labaad`);
          setshardi2(`Inuu Dhedig Yahay Ayaa Fiican`);
          setshardi3(`Waa Inuu Yahay Lo'a`);
        } else if (Xadiga >= 40 && Xadiga < 60) {
          setMufti("Waxaa Ka Baxay");
          setjawaab(`1`);
          setshardi1(`Waa Inuu Galay Sanadkii Sadexaad`);
          setshardi2(`Inuu Dhedig Yahay Ayaa Fiican`);
          setshardi3(`Waa Inuu Yahay Lo'a`);
        } else if (Xadiga > 59) {
          const jw_1 = Xadiga / 30;
          if (String(jw_1).indexOf(".") === -1) {
            // marka bilaa boyntiga
            setMufti("Waxaa Ka Baxay");
            setjawaab(`${jw_1}`);
            setshardi1(`Waa Inay Galeen Sanadkii Labaad`);
            setshardi2(`Inay Dhedig Yihiin Ayaa Fiican`);
            setshardi3(`Waa Inay Lo'a Yihiin`);
          } else {
            //marka boyntiga
            // hubin
            const jw_40 = Xadiga / 40;
            const jw_30 = Xadiga / 30;
            if (String(jw_40).indexOf(".") === -1) {
              //console.log("boynti malaha Tiradau", jw_40 ,jw_30)
              setMufti("Waxaa Ka Baxay");
              setjawaab(`${jw_40}`);
              setshardi1(`Waa Inay Galeen Sanadkii Labaad`);
              setshardi2(`Inay Dhedig Yihiin Ayaa Fiican`);
              setshardi3(`Waa Inay Lo'a Yihiin`);
            } else {
              const jw_40_arr = [];
              const jw_30_arr = [];
              const split_jw_40 = String(jw_40).split(".");
              const split_jw_30 = String(jw_30).split(".");
              // ku ku rid qoraaalk aaad kala jartay arrayga
              jw_40_arr.push(split_jw_40);
              jw_30_arr.push(split_jw_30);
              const last_jawaab_40 = parseInt(jw_40_arr[0]) * 40;
              const last_jawaab_30 = parseInt(jw_30_arr[0]) * 30;
              console.log("q_40", last_jawaab_40);
              console.log("q_30", last_jawaab_30);
              if (last_jawaab_40 >= last_jawaab_30) {
                //Haday isla mid yihiin ama jawaabta 40-ka badantahay
                setMufti("Waxaa Ka Baxay");
                setjawaab(`${last_jawaab_40 / 40}`);
                setshardi1(`Waa Inay Galeen Sanadkii Sadexaad`);
                setshardi2(`Inay Dhedig Yihiin Ayaa Fiican`);
                setshardi3(`Waa Inay Lo'a Yihiin`);
              } else {
                // hadii jawaabta 30-ka ay wayntahay
                setMufti("Waxaa Ka Baxay");
                setjawaab(`${last_jawaab_30 / 30}`);
                setshardi1(`Waa Inay Galeen Sanadkii Labaad`);
                setshardi2(`Inay Dhedig Yihiin Ayaa Fiican`);
                setshardi3(`Waa Inay Lo'a Yihiin`);
              }
            }
          }
        } else {
          setMufti(`Sako Laguma Laha`);
          setjawaab(`sako ma gaadhin ${Xadiga}`);
          setshardi1(`Lo,da waxay ku sako gadhaa 30`);
          setshardi2(`Waa inaad sanad haysay`);
          setshardi3(``);
        }
      }
    } else if (Nooc === "Adhi") {
      const pattern = /[^0-9]/g;
      if (Xadiga.match(pattern)) {
        setMufti("Waa Qalad Waxaad Qortay");
        setjawaab(`Lama Xisaabin Karo `);
        setshardi1(`Lama Ogolo Waxii Aan Tiro Ahayn`);
        setshardi2(
          `Maxa xisaabin karno waxyaabahan hadaad qortay !@#$%^&*()_+ A-z`
        );
        setshardi3(`Sidoo Kale Lama Xisaabin Karro (Qoraal)`);
      } else {
        if (Xadiga >= 40 && Xadiga <= 120) {
          setMufti("Waxaa Ka Baxay");
          setjawaab(`1`);
          setshardi1(`Haduu Yahay Ido Waa in Sanad u buuxsamay`);
          setshardi2(`Haduu Yahay Riyo Waa Inuu Gaadhay Laba Sano`);
          setshardi3(``);
        } else if (Xadiga >= 121 && Xadiga <= 200) {
          setMufti("Waxaa Ka Baxay");
          setjawaab(`2`);
          setshardi1(`Haduu Yahay Ido Waa in Sanad u buuxsamay`);
          setshardi2(`Haduu Yahay Riyo Waa Inuu Gaadhay Laba Sano`);
          setshardi3(``);
        } else if (Xadiga >= 201 && Xadiga <= 300) {
          setMufti("Waxaa Ka Baxay");
          setjawaab(`3`);
          setshardi1(`Haduu Yahay Ido Waa in Sanad u buuxsamay`);
          setshardi2(`Haduu Yahay Riyo Waa Inuu Gaadhay Laba Sano`);
          setshardi3(``);
        } else if (Xadiga >= 301 && Xadiga <= 400) {
          setMufti("Waxaa Ka Baxay");
          setjawaab(`4`);
          setshardi1(`Haduu Yahay Ido Waa in Sanad u buuxsamay`);
          setshardi2(`Haduu Yahay Riyo Waa Inuu Gaadhay Laba Sano`);
          setshardi3(``);
        } else if (Xadiga >= 401) {
          // hawlo badan
          const Adhi1 = Xadiga / 100;
          const adhi2 = String(Adhi1).indexOf(".");
          //const pattern_adhi = /[^.]/g;
          console.log(adhi2);
          console.log(Adhi1);
          if (adhi2 !== -1) {
            // Wuu Leyahay boynti
            const jw_adhi = [];
            jw_adhi.push(String(Adhi1).split("."));
            const last_jawaab = parseInt(jw_adhi) * 100;
            setMufti(`${last_jawaab} Waxaa Ka Baxay`);
            setjawaab(`${last_jawaab / 100}`);
            setshardi1(`Haduu Yahay Ido Waa in Sanad u buuxsamay`);
            setshardi2(`Haduu Yahay Riyo Waa Inuu Gaadhay Laba Sano`);
            setshardi3(
              `${Xadiga - last_jawaab}-ka Soo Hadhay Waxba Laguma laha `
            );
          } else {
            // Malaha Boynti
            setMufti("Waxaa Ka Baxay");
            setjawaab(`${Adhi1}`);
            setshardi1(`Haduu Yahay Ido Waa in Sanad u buuxsamay`);
            setshardi2(`Haduu Yahay Riyo Waa Inuu Gaadhay Laba Sano`);
            setshardi3(``);
          }
        } else if (String(Xadiga).length > 16) {
          console.log("ooops");
        } else {
          setMufti(`Adhigan sako Ma Gaadhin`);
          setjawaab(`waxaba laguma laha ${Xadiga} `);
          setshardi1("adhiga waxa uu ku sako gadhaa 40 neef");
          setshardi2("Waa inaad sanad Haysay");
          setshardi3("");
        }
      }
    } else if (Nooca === "Fido") {
      const pattern = /[^0-9]/g;
      if (Xadiga.match(pattern)) {
        setMufti("Waa Qalad Waxaad Qortay");
        setjawaab(`Lama Xisaabin Karo `);
        setshardi1(`Lama Ogolo Waxii Aan Tiro Ahayn`);
        setshardi2(
          `Maxa xisaabin karno waxyaabahan hadaad qortay !@#$%^&*()_+ A-z`
        );
        setshardi3(`Sidoo Kale Lama Xisaabin Karro (Qoraal)`);
      } else {
        if (Xadiga >= Nisaabka_Fidada) {
          const last_jawaab = Number(Xadiga / 40).toFixed(3);
          setMufti("Waxaa Ka Baxaya");
          setjawaab(last_jawaab);
          setshardi1(`Waa Inay Tahay ${Nooca} Saafi Ah`);
          setshardi2(`Waa Inaad Sanad Haysay`);
          setshardi3(
            `Lacag Hadaad Ku Bixinayso Waa ${Number(
              last_jawaab * q_Fidada
            ).toFixed(2)}$`
          );
        } else {
          setMufti("Fidadaadu  Sako Ma Gaadhin");
          setjawaab(`Waxba Laguma Laha`);
          setshardi1(`Fidadu Waxay Ku sako gaadhaa 595 Giraam`);
          setshardi2(
            `Nooca Ay shabakadu Xisaabisaa waa kaliya nooca 9.99 Ah Saafi`
          );
          setshardi3(``);
        }
      }
    } else if (Nooc === "Rikaas") {
      const pattern = /[^0-9]/g;
      if (Xadiga.match(pattern)) {
        setMufti("Waa Qalad Waxaad Qortay");
        setjawaab(`Lama Xisaabin Karo `);
        setshardi1(`Lama Ogolo Waxii Aan Tiro Ahayn`);
        setshardi2(
          `Maxa xisaabin karno waxyaabahan hadaad qortay !@#$%^&*()_+ A-z`
        );
        setshardi3(`Sidoo Kale Lama Xisaabin Karro (Qoraal)`);
      } else {
        if (Xadiga >= Nisaab_dahab) {
          const last_jawaab = Number(Xadiga / 5).toFixed(3);
          setMufti("Waxaa Ka Baxaya");
          setjawaab(last_jawaab);
          setshardi1(
            `Waa Inuu Yahaya Wax Dadkii Inaga Horeeyay Aaseen Ayna Ka Muuqayto Calaamadahodii`
          );
          setshardi2(`Waa Inuu Yahay Dahab Aad Ka Qodatay Dhulka`);
          setshardi3(
            `Lacag Hadaad Ku Bixinayso Waa ${Number(
              last_jawaab * q_24ka
            ).toFixed(2)}$`
          );
        } else {
          setMufti("Rikaaskaaga  Sako Ma Gaadhin");
          setjawaab(`Waxba Laguma Laha`);
          setshardi1(`Rikaasku Waxa Ku Sako Gaadhaa 85 Giraam`);
          setshardi2(`Waa Inuu yahay Dahab Dad Hore Aaseen`);
          setshardi3(``);
        }
      }
    } else if (Nooc === "Midho") {
      const pattern = /[^0-9]/g;
      if (Xadiga.match(pattern)) {
        setMufti("Waa Qalad Waxaad Qortay");
        setjawaab(`Lama Xisaabin Karo `);
        setshardi1(`Lama Ogolo Waxii Aan Tiro Ahayn`);
        setshardi2(
          `Maxa xisaabin karno waxyaabahan hadaad qortay !@#$%^&*()_+ A-z`
        );
        setshardi3(`Sidoo Kale Lama Xisaabin Karro (Qoraal)`);
      } else {
        if (Xadiga >= Nisaabka_Midhaha) {
          if (q_bixid === "b_kh") {
            const last_jawaab = Number(Xadiga * x_bilaa_kharash).toFixed();
            setMufti("Waxaa Ka Baxaya ");
            setjawaab(`${last_jawaab}`);
            setshardi1(`Waa Inay Yihiin Midho La Gooyay`);
            setshardi2(
              `Waa inay yihiin midho ku baxay kharash la,aan sida biyaha Roobka , wabiyad iwm`
            );
            setshardi3(`Waa inay yihiin midho la kaydsan karro `);
          } else if (q_bixid === "kha") {
            const last_jawaab = Number(Xadiga * x_kharaskha).toFixed(2);
            setMufti("Waxaa Ka Baxaya ");
            setjawaab(`${last_jawaab}`);
            setshardi1(`Waa Inay Yihiin Midho La Gooyay`);
            setshardi2(
              `Waa inay yihiin midho ku baxay kharash  sida biyaha oo loo soo dhaamiyay ama loo shubay`
            );
            setshardi3(`Waa inay yihiin midho la kaydsan karro `);
          } else if (q_bixid === "isk") {
            if (q_isku_jir === "50%") {
              const last_jawaab = Number(Xadiga * isku_jir).toFixed(2);
              setMufti("Waxaa Ka Baxaya ");
              setjawaab(`${last_jawaab}`);
              setshardi1(`Waa Inay Yihiin Midho La Gooyay`);
              setshardi2(
                `Waa inay yihiin midho ku baxay kharash la,aan iyo Kharash wada socda `
              );
              setshardi3(`Waa inay yihiin midho la kaydsan karro `);
            } else if (q_isku_jir === "sh_70%") {
              const last_jawaab = Number(Xadiga * x_kharaskha).toFixed(2);
              setMufti("Waxaa Ka Baxaya ");
              setjawaab(`${last_jawaab}`);
              setshardi1(`Waa Inay Yihiin Midho La Gooyay`);
              setshardi2(
                `Waa inay yihiin midho ku baxay kharash la,aan iyo Kharash wada socda Laakiin Kharashku Badnaa`
              );
              setshardi3(`Waa inay yihiin midho la kaydsan karro `);
            } else if (q_isku_jir === "shla_30%") {
              const last_jawaab = Number(Xadiga * x_bilaa_kharash).toFixed(2);
              setMufti("Waxaa Ka Baxaya ");
              setjawaab(`${last_jawaab}`);
              setshardi1(`Waa Inay Yihiin Midho La Gooyay`);
              setshardi2(
                `Waa inay yihiin midho ku baxay kharash la,aan iyo Kharash wada socda Laakiin Kharashku Yaraa`
              );
              setshardi3(`Waa inay yihiin midho la kaydsan karro `);
            }
          } else {
            setMufti("Waa Qalad Qaabka Xisaabtaadu");
            setjawaab(`Fadlan Dooro Qaabka Bixitaanka`);
            setshardi1(
              `Marka Aad Cadayso Qaabka Midhuhu Kuugu Baxeen Ayaan Xisaabin Karnaa`
            );
            setshardi2(`Intaanad Waxba Xisaabin Qor Qaabka bixitaanka`);
            setshardi3(
              `Mar kasta waxaad qortay saxan yihhin jawaabtuna way saxmaysaa`
            );
          }
        } else {
          setMufti("Midhaha Kuu Baxay Sako Ma Gaadhin");
          setjawaab(`Sako Laguma laha ${Xadiga}`);
          setshardi1(`Waxay Midhuhu Ku Sako Gaadhaan ${Nisaabka_Midhaha} Kg`);
          setshardi2(
            `Khudaarta iyo Waxybaaha Aan La Kaydin Lagama bixiyo sako`
          );
          setshardi3(
            `Dhawr sano Haday Kuu Yaalo Midhahaagu sakadu waa Hal Mar Uun`
          );
        }
      }
    }
    setq_bixid("");
  };

  // sako xisaabin dhamaad

  const value = {
    ActivLogin,
    Aclogin,
    setAclogin,
    ActiveSinup,
    Acsingup,
    setAcsingup,
    ActiveSako,
    AcSako,
    ActiveJawaab,
    AcJawaab,
    ActiveLoadin,
    AcLoading,
    ActivOverley,
    AcOverlay,
    dahab,
    ActiveNavmobile,
    navmobile,
    // sako hawlaheeda
    Diyaariye,
    Nooc,
    setNooc,
    NDahab,
    setNDahab,
    Xadiga,
    seXadiga,
    Shardi1,
    Shardi2,
    Shardi3,
    jawaab,
    setq_bixid,
    q_bixid,
    setq_isku_jir,
    q_isku_jir,
    setN_Midho,
    N_Midho,
    fido,
    q_Fidada,
    muti,
    ActiveAlert,
    alert,

    // kuwo cusub
    allow_xisaab,
    xisaab,
  };

  return <Datacontext.Provider value={value}>{children}</Datacontext.Provider>;
}
