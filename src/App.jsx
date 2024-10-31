import React, { useState } from 'react'
import {
  Container,
  Title,
  OlympicWrapper,

} from './style/Style'
import MedalForm from './components/MedalForm';
import MedalTable from './components/MedalTable';

const App = () => {

  // localStorage의 데이터를 불러온다
  const savedList = JSON.parse(localStorage.getItem("countryList")||[]);

  const [country, setCountry] = useState(""); // 국가명
  const [gold, setGold] = useState(0);        // 금메달 수
  const [silver, setSilver] = useState(0);    // 은메달 수
  const [bronze, setBronze] = useState(0);    // 동메달 수
  
  // 불러왔던 localStorage의 데이터를 초기값으로 설정해준다.
  const [countryMedalInfo, setCountryMedalInfo] = useState(savedList);

  // 국가명 input에 입력 받은 문자열을 저장한다.
  const onChangeCountry = (event) => {
    setCountry(event.target.value);
  }

  // 금메달 input에 입력 받은 숫자를 저장한다.
  const onChangeGoldCount = (event) => {
    if (event.target.value>=0 && event.target.value < 100) {
      setGold(Number(event.target.value));
    } else {
      alert("0이상 100미만 숫자를 입력해주세요.")
      setGold(0);
      return;
    }
  }

  // 은메달 input에 입력 받은 숫자를 저장한다.
  const onChangesilverCount = (event) => {
    if (event.target.value>=0 && event.target.value < 100) {
      setSilver(Number(event.target.value));
    } else {
      alert("0이상 100미만 숫자를 입력해주세요.")
      setSilver(0);
      return;
    }
  }

  // 동메달 input에 입력 받은 숫자를 저장한다.
  const onChangebronzeCount = (event) => {
    if (event.target.value>=0 && event.target.value < 100) {
      setBronze(Number(event.target.value));
    } else {
      alert("0이상 100미만 숫자를 입력해주세요.")
      setBronze(0);
      return;
    }
  }

  // 국가 정보 추가 버튼
  const onAddCountrySubmit = (event) => {
    // 국가명 input이 빈문자열이면 alert을 띄우고 함수를 빠져나간다.
    if (country === "") {
      alert("국가를 입력해주세요")
      event.preventDefault();
      return;
    // 이미 등록된 국가명이면 alert을 띄우고 함수를 빠져나간다.  
    } else if (countryMedalInfo.some((info) => info.country === country)) {
      alert("해당 국가는 이미 등록되어 있습니다.")
      event.preventDefault();
      setCountry("");
      setBronze(0);
      setGold(0);
      setSilver(0);
      return;
    // 국가명 입력에 문제가 없으면 국가 메달 정보를 저장한다.  
    } else {
      const totalMedalSum = gold+silver+bronze;
      event.preventDefault();
      const countryinfo = {
        id: new Date().getTime(),
        country,
        gold,
        silver,
        bronze,
        totalSum: totalMedalSum,
      }

      // 저장된 배열의 객체들이 테이블에 나타날 때, 금메달 숫자에 따라
      // 내림차순으로 정렬된다.
      const sortInfo = [...countryMedalInfo, countryinfo].sort((a, b) => b.gold - a.gold);
      alert("국가 메달 정보 리스트 추가 완료!");
      
      // localStorage에 정렬된 배열을 저장한다
      localStorage.setItem("countryList", JSON.stringify(sortInfo));
      
      // 정렬된 배열을 state에 저장하고 나머지 값은 초기화시킨다.
      setCountryMedalInfo(sortInfo);
      setCountry("");
      setBronze(0);
      setGold(0);
      setSilver(0);
    }
  }

  // 메달 수 변동 업데이트 버튼
  const onClickUpdateBtn = () => {

    // some() 메서드를 사용하여 입력한 국가명이 
    // countryMedalInfo 배열의 객체에 존재한다면 true반환하여
    // 로직을 수행하고 존재하지 않으면 false를 반환하고
    // 해당 국가가 테이블에 존재하지 않음을 알려준다.
    if (countryMedalInfo.some((info) => info.country === country)) {

      // map() 메서드로 기존 배열 안의 객체를
      // 업데이트 된 새로운 객체들의 배열로 반환하여 
      // CountryMedalInfo에 저장한다.
      const updateMedalInfo = countryMedalInfo.map((info) => {

        // map으로 들어온 객체의 국가명과 입력한 국가명이 같으면
        // 내부를 수행하여 수정한 객체를 반환
        if (info.country === country) {
          let sum = 0; // 변경된 메달 개수를 합하기 위한 변수
          sum+=((gold !== 0 && info.gold !== gold) ? gold : info.gold);
          sum+=((silver !== 0 && info.silver !== silver) ? silver : info.silver);
          sum+=((bronze !== 0 && info.bronze !== bronze) ? bronze : info.bronze);
          // 변경된 메달수와 총합을 반환한다.
          return {
            ...info,
            country: country !== "" ? info.country : country,
            gold: (gold !== 0 && info.gold !== gold) ? gold : info.gold,
            silver: (silver !== 0 && info.silver !== silver) ? silver : info.silver,
            bronze: (bronze !== 0 && info.bronze !== bronze) ? bronze : info.bronze,
            totalSum:sum,
          };
          // map으로 들어온 객체의 국가명과 입력한 국가명이 다르면
          // 수정한 부분이 없으므로 그대로 리턴 
        } return info;
      }).sort((a, b) => b.gold - a.gold); // 금메달 순 내림차순 정렬로 배열 반환

      // localStorage와 state에 변경된 객체 배열을 저장하고 alert을 띄운다
      localStorage.setItem("countryList", JSON.stringify(updateMedalInfo));
      setCountryMedalInfo(updateMedalInfo);
      alert("메달 업데이트 완료!")
      
      // 입력한 국가명이 없을 경우 alert을 띄운다.
    } else {
      alert("존재하지 않는 국가입니다.");
    }
    // 업데이트 후 state를 초기화한다.
    setCountry("");
    setBronze(0);
    setGold(0);
    setSilver(0);
  }

  // 테이블에 국가 메달 리스트를 삭제하는 버튼
  const onClickDeleteCountryBtn = (id) => {
    // 버튼이 눌려진 국가의 id와 다른 id를 가진 국가들만 반환한다. 
    const newCountryInfo = countryMedalInfo.filter((info) => {
      return info.id !== id
    })
    // 삭제 후 변경된 국가 리스트 배열을 localStorage와 state에 저장한다.  
    localStorage.setItem("countryList", JSON.stringify(newCountryInfo));
    setCountryMedalInfo(newCountryInfo);
    alert("국가 메달 정보 리스트 삭제 완료!")
  }

  // 금메달 순서로 정렬하는 버튼
  const onClickGoldSortBtn = () => {
    // 내림차순 정렬 후 state와 localstorage에 저장한다.
    const sortGold = [...countryMedalInfo].sort((a, b) => b.gold - a.gold);
    setCountryMedalInfo(sortGold);
    localStorage.setItem("countryList", JSON.stringify(sortGold));
  }

  // 메달 총 합 순서로 정렬하는 버튼
  const onClickTotalSortBtn = () => {
    // 내림차순 정렬 후, state와 localStorage에 저장한다.
    const sortTotalMedal = [...countryMedalInfo].sort((a,b)=>b.totalSum-a.totalSum)
    setCountryMedalInfo(sortTotalMedal)
    localStorage.setItem("countryList", JSON.stringify(sortTotalMedal));
  }
  return (
    <Container>
      <OlympicWrapper>
        <Title>2024 파리 올림픽</Title>

        <MedalForm onChangeCountry={onChangeCountry}
          onChangeGoldCount={onChangeGoldCount}
          onChangesilverCount={onChangesilverCount}
          onChangebronzeCount={onChangebronzeCount}
          onAddCountrySubmit={onAddCountrySubmit}
          onClickUpdateBtn={onClickUpdateBtn}
          country={country}
          gold={gold}
          silver={silver}
          bronze={bronze}
        >
        </MedalForm>

        <MedalTable onClickDeleteCountryBtn={onClickDeleteCountryBtn}
        onClickGoldSortBtn={onClickGoldSortBtn}
        onClickTotalSortBtn={onClickTotalSortBtn}
        countryMedalInfo={countryMedalInfo}>
        </MedalTable>

      </OlympicWrapper>
    </Container>
  )
}

export default App