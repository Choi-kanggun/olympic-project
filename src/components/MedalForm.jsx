import React from 'react'
import {
    InputForm,
    InputCountry,
    InputMedal,
    AddCountryBtn,
    UpdateCountryBtn,
    CountryFieldset,
    GoldMedalFieldset,
    SilverMedalFieldset,
    BronzeMedalFieldset,
    UpdateBtnFieldset,
    Legend,
} from '../style/Style'

const MedalForm = ({
    onChangeCountry,
    onChangeGoldCount,
    onChangesilverCount,
    onChangebronzeCount,
    onAddCountrySubmit,
    onClickUpdateBtn,
    country,
    gold,
    silver,
    bronze,

}) => {
    return (
        <InputForm onSubmit={onAddCountrySubmit}>

            <CountryFieldset>
                <Legend>국가명</Legend>
                <InputCountry type='text' onChange={onChangeCountry} value={country} placeholder='국가 입력' />
            </CountryFieldset>

            <GoldMedalFieldset>
                <Legend>금메달</Legend>
                <InputMedal type='number' onChange={onChangeGoldCount} value={gold} />
            </GoldMedalFieldset>

            <SilverMedalFieldset>
                <Legend>은메달</Legend>
                <InputMedal type='number' onChange={onChangesilverCount} value={silver} />
            </SilverMedalFieldset>

            <BronzeMedalFieldset>
                <Legend>동메달</Legend>
                <InputMedal type='number' onChange={onChangebronzeCount} value={bronze} />
            </BronzeMedalFieldset>

            <UpdateBtnFieldset>
                <AddCountryBtn type='submit'>
                    국가 추가
                </AddCountryBtn>
                <UpdateCountryBtn type='button' onClick={onClickUpdateBtn}>
                    업데이트
                </UpdateCountryBtn>
            </UpdateBtnFieldset>

        </InputForm>
    )
}

export default MedalForm