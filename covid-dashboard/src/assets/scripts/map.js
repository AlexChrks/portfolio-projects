import CovidAPI from './Covid19API.js';
// eslint-disable-next-line no-unused-vars
import { Map } from './leaflet-src.js';
import '../styles/leaflet.css';
import countPer100K from './countPer100KMap.js';

const MapContainer = {
  elements: {
    mapImg: '',
    circles: [],
    arrRanges: [1, 3, 7, 15, 20, 25, 35, 45, 100, 300, 600],
    arrRangeNew: [1, 2, 3, 4, 5, 6, 7]
  },
  param: '',
  option: '',
  percent: '',

  initCurCntr(obj) {
    this.curcntr = obj;
  },

  init() {
    const mapBlock = document.querySelector('.map_widget');
    const mapOptions = {
      center: [0, 0],
      zoom: 1,
      zoomDelta: 0.25,
      zoomSnap: 0.5,
      maxZoom: 10,
      minZoom: 2,
      worldCopyJump: true
    };
    // eslint-disable-next-line no-undef
    this.elements.mapImg = new L.Map(mapBlock, mapOptions);
    // eslint-disable-next-line no-undef
    const layer = new L.TileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
      maxZoom: 20,
      minZoom: 1
    });
    this.elements.mapImg.addLayer(layer);
    const legend = document.createElement('div');
    legend.classList.add('map_legend');
    mapBlock.appendChild(legend);
    const buttonLegend = document.createElement('button');
    buttonLegend.classList.add('legend_icon');
    mapBlock.appendChild(buttonLegend);
    const fullscreen = mapBlock.querySelector('.full_screen');
    fullscreen.addEventListener('click', () => {
      setTimeout(() => { MapContainer.elements.mapImg.invalidateSize(); }, 40);
    });
    buttonLegend.addEventListener('click', () => {
      if (legend.classList.contains('map_legend_active')) {
        legend.classList.remove('map_legend_active');
      } else {
        legend.classList.add('map_legend_active');
      }
    });
    const popapMap = document.createElement('div');
    popapMap.classList.add('map_popap');
    mapBlock.appendChild(popapMap);
    popapMap.addEventListener('click', () => { popapMap.classList.remove('popap_active'); });
    const select = mapBlock.querySelector('.select-container');
    select.classList.add('map_select');
    const selectParam = document.getElementById('selectparammap_widget');
    const selectOption = document.getElementById('selecttimemap_widget');
    const selectPercent = document.getElementById('selectpercentmap_widget');
    const arraySelected = [];
    arraySelected.push(selectParam, selectOption, selectPercent);
    this.param = selectParam.value;
    this.option = selectOption.value;
    this.percent = selectPercent.value;
    this.drawCircles(this.param, this.option, this.percent);
    this.elements.mapImg.setView([0, 0], 2);
  },

  drawCircles(par, opt, perct) {
    if (MapContainer.elements.circles.length) {
      MapContainer.elements.circles.forEach((elem) => {
        MapContainer.elements.mapImg.removeLayer(elem);
      });
      MapContainer.elements.circles = [];
    }
    const parametr = par[0].toUpperCase() + par.slice(1);
    const option = opt[0].toUpperCase() + opt.slice(1);
    let percent = perct[0].toUpperCase() + perct.slice(1);
    if (perct === 'per100k') { percent = 'Per 100k'; }
    MapContainer.param = parametr;
    MapContainer.option = option;
    MapContainer.percent = percent;
    let colorCircle;
    let factor = 1;
    let param = `total${parametr}`;
    if (param === 'totalConfirmed') {
      colorCircle = 'rgba(8,138,179,0.7)';
      factor = 10000;
    } else if (param === 'totalDeaths') {
      colorCircle = 'red';
      factor = 100;
    } else {
      colorCircle = 'green';
      factor = 5000;
    }
    if (option === 'Daily') {
      param = `new${param.substr(5)}`;
      factor /= 100;
    }
    if (percent === 'Per 100k') {
      if (param === 'totalConfirmed' || param === 'newConfirmed') { factor /= 1000; }
      if (param === 'totalDeaths' || param === 'totalRecovered') { factor /= 200; }
      if (param === 'newDeaths') { factor = 1; }
      if ((param === 'newRecovered' || param === 'newConfirmed') && option === 'Daily') { factor = 15; }
      if ((param === 'totalDeaths' || param === 'totalRecovered') && option === 'Daily') { factor /= 500; }
    }
    MapContainer.createLegend(factor, colorCircle);
    CovidAPI.getSummary().then((database) => {
      const arr = [];
      const country = database.countries;
      for (let i = 0; i < database.countries.length; i += 1) {
        let radiusCircle;
        let cases;
        if (percent === 'Per 100k') {
          cases = countPer100K(country[i][param], country[i].population);
        } else {
          cases = country[i][param];
        }
        if (option === 'Daily' && percent === 'Per 100k') {
          if (cases > Math.floor(6 * factor)) {
            radiusCircle = 15;
          } else if (cases > Math.floor(5 * factor) && cases <= Math.floor(6 * factor)) {
            radiusCircle = 13;
          } else if (cases > Math.floor(4 * factor) && cases <= Math.floor(5 * factor)) {
            radiusCircle = 11;
          } else if (cases > Math.floor(3 * factor) && cases <= Math.floor(4 * factor)) {
            radiusCircle = 9;
          } else if (cases > Math.floor(2 * factor) && cases <= Math.floor(3 * factor)) {
            radiusCircle = 7;
          } else if (cases >= Math.floor(1 * factor) && cases <= Math.floor(2 * factor)) {
            radiusCircle = 3;
          } else {
            radiusCircle = 0;
          }
        } else {
          // eslint-disable-next-line no-lonely-if
          if (cases > Math.floor(600 * factor)) {
            radiusCircle = 17;
          } else if (cases > Math.floor(300 * factor) && cases <= Math.floor(600 * factor)) {
            radiusCircle = 14;
          } else if (cases > Math.floor(100 * factor) && cases <= Math.floor(300 * factor)) {
            radiusCircle = 12;
          } else if (cases > Math.floor(45 * factor) && cases <= Math.floor(100 * factor)) {
            radiusCircle = 9;
          } else if (cases > Math.floor(35 * factor) && cases <= Math.floor(45 * factor)) {
            radiusCircle = 8;
          } else if (cases > Math.floor(25 * factor) && cases <= Math.floor(35 * factor)) {
            radiusCircle = 7;
          } else if (cases > Math.floor(20 * factor) && cases <= Math.floor(25 * factor)) {
            radiusCircle = 6;
          } else if (cases > Math.floor(15 * factor) && cases <= Math.floor(20 * factor)) {
            radiusCircle = 5;
          } else if (cases > Math.floor(7 * factor) && cases <= Math.floor(15 * factor)) {
            radiusCircle = 4;
          } else if (cases > Math.floor(3 * factor) && cases <= Math.floor(7 * factor)) {
            radiusCircle = 3;
          } else if (cases >= 1 && cases <= Math.floor(3 * factor)) {
            radiusCircle = 2;
          } else if (cases < 1) {
            radiusCircle = 0;
          }
        }
        arr.push(cases);
        // eslint-disable-next-line no-undef
        let circle;
        if (radiusCircle !== 0) {
          // eslint-disable-next-line no-undef
          circle = new L.CircleMarker(country[i].latLon, {
            color: colorCircle,
            fillColor: colorCircle,
            fillOpacity: 0.7,
            radius: radiusCircle
          });
          circle.countryCode = country[i].countryCode;
          circle.latLon = country[i].latLon;
          this.elements.circles.push(circle);
          const circleElement = circle.addTo(MapContainer.elements.mapImg);
          circleElement.on('click', (event) => {
            this.curcntr.countryCode = country[i].countryCode;
            this.curcntr.slug = country[i].slug;
            MapContainer.focusMap(event, country[i], cases, circle);
            this.elements.mapImg.fireEvent('click');
          });
          circleElement.addEventListener('mouseover', (event) => {
            MapContainer.focusMap(event, country[i], cases, circle);
          });
          circleElement.addEventListener('mouseout', (event) => {
            MapContainer.focusMap(event, country[i], cases, circle);
          });
        }
      }
    // eslint-disable-next-line no-console
    }).catch((error) => console.log(error.message));
  },

  createLegend(factor, colorCircle) {
    let list = null;
    if (MapContainer.option === 'Daily' && MapContainer.percent === 'Per 100k') {
      list = MapContainer.elements.arrRangeNew;
    } else {
      list = MapContainer.elements.arrRanges;
    }
    const legend = document.querySelector('.map_legend');
    legend.innerHTML = '';
    for (let i = list.length - 1; i >= 0; i -= 1) {
      const lineLegend = document.createElement('div');
      lineLegend.classList.add('line_legend');
      if (Math.floor(list[i] * factor) <= 3 || i === 0) {
        lineLegend.innerHTML = `
        <div class ="wrap_circle"><span  style = "width: 5px; height: 5px; background: ${colorCircle}"></span></div> > 
        1 - ${(Math.floor(list[i] * factor).toLocaleString())}`;
        legend.appendChild(lineLegend);
        break;
      } else if (i === list.length - 1) {
        lineLegend.innerHTML = `
        <div class ="wrap_circle">
        <span  style = "width: 15px; height: 15px; background: ${colorCircle}"></span></div> > 
        ${(Math.floor(list[i] * factor).toLocaleString())}`;
      } else {
        lineLegend.innerHTML = `<div class ="wrap_circle">
        <span  style = "width: ${i + 4}px; height: ${i + 4}px; background: ${colorCircle}"></span></div> > 
      ${(Math.floor(list[i - 1] * factor)).toLocaleString()} - ${(Math.floor(list[i] * factor)).toLocaleString()}`;
      }
      legend.appendChild(lineLegend);
    }
  },

  focusMap(event, dataObj, causes, circle) {
    circle.closePopup();
    const popapMap = document.querySelector('.map_popap');
    if (event.type === 'mouseover') {
      popapMap.classList.add('popap_active');
      popapMap.innerHTML = `
      ${dataObj.name}<br>
      Сases: ${Math.floor(causes).toLocaleString()}`;
    } else if (event.type === 'mouseout') {
      popapMap.classList.remove('popap_active');
    } else if (event.type === 'click') {
      MapContainer.elements.mapImg.setView([circle.latLon[0], circle.latLon[1]], 4,
        { animate: true, duration: 0.5 });
    }
  },

  focusCountry(countryCode) {
    const circlesList = this.elements.circles;
    for (let i = 0; i < circlesList.length; i += 1) {
      if (circlesList[i].countryCode === countryCode) {
        this.elements.mapImg.setView([circlesList[i].latLon[0], circlesList[i].latLon[1]], 4,
          { animate: true, duration: 0.5 });
      }
    }
  }

};
// eslint-disable-next-line import/prefer-default-export
export const MapWidget = MapContainer;
