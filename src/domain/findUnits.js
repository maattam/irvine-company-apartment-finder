export const findUnits = async query => {
  const res = await fetch(createSearchUrl(query), {
    headers: {
      accept: "application/json"
    }
  });

  return (await res.json()).resultsets[0].results.map(mapUnitResult);
};

const createSearchUrl = ({ communityId }) => {
  const url = new URL("https://www.irvinecompanyapartments.com/snp");
  url.search = new URLSearchParams({
    sp_q_1: "unit",
    sp_x_1: "entityType",
    sp_x_3: "communityIdAEM",
    sp_q_3: communityId,
    sp_q_4: "ica",
    sp_x_4: "appId",
    app: "icaFloorplanPage",
    count: 999,
    sp_s: "planName",
    upm_field_table: 1,
    sp_q_exact_8: 12,
    sp_x_8: "upm.upm_leaseTerm",
  });
  return url;
};

const mapUnitResult = result => {
  const upm = result.upm[0][Object.keys(result.upm[0])[0]][0];
  return {
    id: upm.upm_buildingUnit,
    name: result.floorplanMarketingName,
    rent: parseFloat(upm.upm_baseRent),
    marketRent: parseFloat(result.marketRent),
    pricingDate: result.unitPricingDate,
    sqFt: result.unitSqFt,
    bathrooms: parseInt(result.bathrooms),
    bedrooms: parseInt(result.bedrooms),
    amenities: result.amenities.split("|").filter(amenity => !!amenity.length),
    occupancyStatusCode: result.occupancyStatusCode,
    availableAt: upm.upm_startDate,
    floor: result.floorLevel || 1
  };
};
