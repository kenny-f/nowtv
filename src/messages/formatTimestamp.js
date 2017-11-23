import moment from 'moment';

export default timestamp => moment(timestamp).format('YYYY MMM DD - HH:mm');
