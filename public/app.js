import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'paper': {
    'width': [{ 'unit': 'px', 'value': 400 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'header': {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'space-between',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#E0E0E0' }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'filter': {
    'display': 'inline-flex',
    'alignItems': 'center',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00BCD4' }],
    'height': [{ 'unit': 'px', 'value': 30 }]
  },
  'filter-input': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'width': [{ 'unit': 'px', 'value': 200 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'paper-form': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': 'px', 'value': 400 }],
    'display': 'flex',
    'justifyContent': 'center',
    'flexWrap': 'wrap'
  },
  'form-input': {
    'display': 'block',
    'marginBottom': [{ 'unit': 'px', 'value': 18 }],
    'width': [{ 'unit': 'px', 'value': 250 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'borderRadius': '2px',
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00BCD4' }]
  },
  'label': {
    'display': 'block',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': 'grey',
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'criate-button': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'star': {
    'color': '#E91E63'
  }
});
