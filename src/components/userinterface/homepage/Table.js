import * as React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, useTheme, useMediaQuery,
  Box, Typography, Divider
} from '@mui/material';

function createData(field, details) {
  return { field, details };
}

const rows = [
  createData('Journal Title', 'Varsha Research Organization'),
  createData('Staring Year', 'April 2025'),
  createData('Frequency', 'Issue: Monthly, Volume: Quarterly (April, July, October, January)'),
  createData('Subject', 'Multidisciplinary'),
  createData('Format', 'Online'),
  createData('Languages', 'Multilingual (Hindi, English, Sanskrit, etc.)'),
  createData('Publisher Name', 'Varsha Research Organization'),
  createData('Publisher Address', '39, Kishanbhag, Bahodapur Gwalior MP-474012'),
  createData('Email', 'editor@varsharesearchorganization.com'),
  createData('Contact Number', '‪+91 98276 46334‬'),
  createData('Chief Editor Name', 'Varsha Rajput')
];

export default function ResponsiveTable() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={{ width: '100%', px: 2, py: 4 }}>
      <Typography
        variant={isMdUp ? 'h4' : 'h6'}
        align="center"
        fontWeight="bold"
        color="text.secondary"
        gutterBottom
      >
        Journal and Publisher Details for ISSN Application
      </Typography>

      {isMdUp ? (
        // Standard Table for medium and larger screens
        <TableContainer
          component={Paper}
          sx={{
            width: '80%',
            mx: 'auto',
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <Table aria-label="journal table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#8395a7' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                  Field
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                  Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.field}>
                  <TableCell sx={{ textAlign: 'center', fontSize: 16 }}>{row.field}</TableCell>
                  <TableCell sx={{ textAlign: 'center', fontSize: 16 }}>{row.details}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        // Card/Stacked layout for small screens
        <Box>
          {rows.map((row, index) => (
            <Paper key={row.field} elevation={2} sx={{ mb: 2, p: 2 }}>
              <Typography variant="subtitle2" fontWeight="bold" color="text.secondary">
                {row.field}
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5,wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                {row.details}
              </Typography>
              {index < rows.length - 1 && <Divider sx={{ mt: 2 }} />}
            </Paper>
          ))}
        </Box>
      )}
    </Box>
  );
}
