const provinces = [
    'Jawa Barat',
    'Jawa Tengah',
    'Jawa Timur'
];
const provinceList = document.getElementById('provinsi');

provinces.forEach(province => {
    const option = document.createElement('option');
    option.value = province;
    provinceList.appendChild(option);
}); 

const cities = {
  'Jawa Barat': ['Bandung', 'Bogor', 'Depok'],
  'Jawa Tengah': ['Semarang', 'Solo', 'Tegal'],
  'Jawa Timur': ['Surabaya', 'Malang', 'Jember']
};


const provinceInput = document.getElementById('pname');
const kotaDatalist = document.getElementById('city');


provinceInput.addEventListener('input', () => {
    
    const selectedProvince = provinceInput.value;
    const citiesInProvince = cities[selectedProvince] || [];
    
    // Clear existing options
    kotaDatalist.innerHTML = '';
    
    // Populate the city datalist with options from the selected province
    citiesInProvince.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        kotaDatalist.appendChild(option);
    });
  });

const zipcode = {
  'Bandung': ['40111', '40112', '40113'],
  'Bogor': ['16110', '16111', '16112'],
  'Depok': ['16415', '16416', '16417'],
  'Semarang': ['50111', '50112', '50113'],
  'Solo': ['57111', '57112', '57113'],
  'Tegal': ['52111', '52112', '52113'],
  'Surabaya': ['60111', '60112', '60113'],
  'Malang': ['65111', '65112', '65113'],
  'Jember': ['68111', '68112', '68113']
};

const cityInput = document.getElementById('cname');
const zipcodeList = document.getElementById('zipList');

cityInput.addEventListener('input', () => {
    
    const citySelected =  cityInput.value;
    const zipinCity = zipcode[citySelected] || [];

    // Clear existing options
    zipcodeList.innerHTML = '';
    zipinCity.forEach(zip => {
      const option = document.createElement('option');
      option.value = zip;
      alert(option.value)
      zipcodeList.appendChild(option);
    });
});

function zipfind(){
  const zipInput = document.getElementById('kname');
  const text1 = "Your zip code is : " + zipInput.value;
  const text2 = "Your city is : " + cityInput.value;
  const text3 = "Your Provinces is : " + provinceInput.value;
  document.getElementById('exp1').innerHTML = text1;
  document.getElementById('exp2').innerHTML = text2;
  document.getElementById('exp3').innerHTML = text3;
};




