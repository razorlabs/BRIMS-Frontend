import gql from 'graphql-tag';

export const GET_SHIPMENTS = gql`
  {
    allShipments {
      id
      carrier {
        name
      }
      shipmentNumber
      destination {
        name
      }
      sentDate
      receivedDate
      notes
    }
  }
`;

export const SHIPMENT_MANIFEST = gql`
  query($shipment: Int!) {
    shipmentManifest(shipment: $shipment) {
      key
      name
      aliquot {
        specimen {
          patientid
        }
        id
        type
        volume
        boxslotmodel {
          rowPosition
          columnPosition
        }
      }
    }
  }
`;
