import React from 'react'
import {
    MedalInfoTable,
    TableDiv,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    DelInfoBtn,
    SortBtn,
    SortBtnBox
} from '../style/Style'

const MedalTable = ({
    onClickDeleteCountryBtn,
    onClickGoldSortBtn,
    onClickTotalSortBtn,
    countryMedalInfo
}) => {
    return (
        <TableDiv>
            {countryMedalInfo.length === 0 ? <p>아직 추가된 국가가 없습니다.</p> :
                <>
                    <SortBtnBox>
                        <SortBtn onClick={() => onClickGoldSortBtn()}>
                            금메달 순 정렬
                        </SortBtn>
                        <SortBtn onClick={() => onClickTotalSortBtn()}>
                            총합 순 정렬
                        </SortBtn>
                    </SortBtnBox>
                    <MedalInfoTable>
                        <Thead>
                            <Tr>
                                <Th>국가명</Th>
                                <Th>금메달</Th>
                                <Th>은메달</Th>
                                <Th>동메달</Th>
                                <Th>총 합</Th>
                                <Th>삭 제</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {countryMedalInfo.map((info) => {
                                return (
                                    <Tr key={info.id}>
                                        <Td>{info.country}</Td>
                                        <Td>{info.gold}</Td>
                                        <Td>{info.silver}</Td>
                                        <Td>{info.bronze}</Td>
                                        <Td>{info.totalSum}</Td>
                                        <Td>
                                            <DelInfoBtn onClick={() => onClickDeleteCountryBtn(info.id)}>
                                                삭제
                                            </DelInfoBtn>
                                        </Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </MedalInfoTable>
                </>
            }
        </TableDiv>
    )
}

export default MedalTable