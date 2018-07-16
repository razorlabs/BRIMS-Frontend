import { graphql } from 'react-apollo';
import { GET_PENDING_SHIPMENTS } from '../Data/ShippingQueryData';
import PendingShipment from '../Layout/Shipping/PendingShipment';

const PendingShippingWithData = graphql(GET_PENDING_SHIPMENTS)(PendingShipment);

export default PendingShippingWithData;
