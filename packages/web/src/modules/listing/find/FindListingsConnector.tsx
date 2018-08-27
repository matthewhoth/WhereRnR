import * as React from "react";
import { Card } from "antd";
import { withFindListings, WithFindListings } from "@airbnb/controller";
const { Meta } = Card;
class RC extends React.PureComponent<WithFindListings> {
  render() {
    const { listings, loading } = this.props;
    return (
      <div>
        {loading && <div>...loading</div>}
        {listings.map(l => (
          <Card
            key={`${l.id}-card`}
            hoverable={true}
            style={{ width: 240 }}
            cover={l.pictureUrl && <img alt="example" src={l.pictureUrl} />}
          >
            <Meta title={l.name} description="www.instagram.com" />
            <Meta title={l.name} description={l.owner.email} />
          </Card>
        ))}
      </div>
    );
  }
}
export const FindListingsConnector = withFindListings(RC);
