import React from 'react';
import { Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { ingredients as purchasedIngredients } from '../api/purchasedIngredients';

function PurchasedIngredientsList({ inciName }) {
  const filteredIngredients = purchasedIngredients.filter(item => item.inciName === inciName);

  return (
    <>
      <Typography variant="h6" gutterBottom component="div">
        구매 성분 정보
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>제조사</TableCell>
            <TableCell>원산지</TableCell>
            <TableCell>추출 부위</TableCell>
            <TableCell>유래 부위</TableCell>
            <TableCell>캘러스 유래</TableCell>
            <TableCell>기타</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredIngredients.map((purchasedIngredient) => (
            <TableRow key={purchasedIngredient.id}>
              <TableCell>{purchasedIngredient.manufacturer}</TableCell>
              <TableCell>{purchasedIngredient.origin}</TableCell>
              <TableCell>{purchasedIngredient.extractionPart}</TableCell>
              <TableCell>{purchasedIngredient.derivedPart}</TableCell>
              <TableCell>{purchasedIngredient.callusOrigin}</TableCell>
              <TableCell>{purchasedIngredient.etc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default PurchasedIngredientsList;