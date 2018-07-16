import { graphql } from 'react-apollo';
import { GET_PENDING_RECEIVING } from '../Data/ShippingQueryData';
import PendingReceiving from '../Layout/Shipping/PendingReceiving';

const PendingReceivingWithData = graphql(GET_PENDING_RECEIVING)(PendingReceiving);

export default PendingReceivingWithData;
