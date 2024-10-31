import styled from "@emotion/styled"

export const Container = styled.div`
    width:100%;
    height:100%;
    background-color:#f4f4f9;
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const OlympicWrapper = styled.div`
    border-radius:10px;
    box-shadow: 2px 5px 8px lightgray;
    margin-top:50px;
    text-align:center;    
    background-color:white;
    max-width:1200px;
    min-width:800px;
`

export const Title = styled.h1`
padding-top:40px;
    color:#333399;
    min-width:100px;
`

export const Label = styled.label`
    font-weight:bold;
`
export const CountryFieldset = styled.fieldset`
    width:20%;
    border:none;
    padding: 0;
`
export const GoldMedalFieldset = styled.fieldset`
    width:20%;
    border:none;
    padding: 0;
`
export const SilverMedalFieldset = styled.fieldset`
    width:20%;
    border:none;
    padding:0;
    padding: 0;
`
export const BronzeMedalFieldset = styled.fieldset`
    width:20%;
    border:none;
    padding:0;
    padding: 0;
`
export const UpdateBtnFieldset = styled.fieldset`
    width:20%;
    border:none;
    display:flex;
    flex-direction:row;
    align-items:flex-end;
    gap:10px;
    padding: 0;
`
export const InputForm = styled.form`
    margin-top:20px;
    display:flex;
    flex-direction:row;
    padding:0 20px;
    gap:10px;
`

export const InputCountry = styled.input`
    border-radius:5px;
    width:100%;
    height:40px;
    border:1px solid lightgray;
    padding-left:10px;
`

export const InputMedal = styled.input`
    border-radius:5px;
    width:100%;
    height:40px;
    border:1px solid lightgray;
    padding-left:10px;
`

export const AddCountryBtn = styled.button`
    width:100%;
    height:40px;
    background-color: #FFCC33;
    border:none;
    cursor:pointer;
    font-weight:bold;
    &:hover {
        background-color:#FFFF66;
    }
`

export const UpdateCountryBtn = styled.button`
    width:100%;
    height:40px;
    background-color: #FFCC33;
    border:none;
    cursor:pointer;
    font-weight:bold;
    &:hover {
        background-color:#FFFF66;
    }
`

export const Legend = styled.legend`
    padding-bottom:5px;
    font-weight:bold;
`

export const TableDiv = styled.div`
    padding:20px;
`

export const MedalInfoTable = styled.table`
    border-spacing:0;
    border-radius:10px;
    width:100%;
    overflow:hidden;
`
export const Thead = styled.thead`
    background-color:#000066;
    color:white;
`

export const Tr = styled.tr`
` 

export const Th = styled.th`
    padding:10px 0;
`

export const Tbody = styled.tbody`
    background-color:#CCCCFF;
`

export const Td = styled.td`
    padding:15px 0;
`

export const DelInfoBtn = styled.button`
    background-color:red;
    border:none;
    border-radius:5px;
    cursor : pointer;
    color:white;
    padding:5px;
`
export const SortBtnBox = styled.div`
    display:flex;
    justify-content:flex-start;
`
export const SortBtn = styled.button`
    border:none;
    background-color:#CCCCFF;
    color:black;
    border-radius:5px;
    margin: 0 5px 2px 0;
    cursor:pointer;
    font-weight:bold;
    font-size:14px;
    border:1px solid lightgray;
`