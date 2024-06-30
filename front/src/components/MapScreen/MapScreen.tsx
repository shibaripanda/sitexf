import { AspectRatio } from '@mantine/core';
import React from 'react';

export function MapScreen() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.5437373439!2d27.42541977676484!3d53.88653897245086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbdae14a336913%3A0x216cfd57b31ede77!2z0KHQtdGA0LLQuNGB0L3Ri9C5INGG0LXQvdGC0YAgeGYxMCwg0KDQtdC80L7QvdGCINC90L7Rg9GC0LHRg9C60L7Qsiwg0YLQtdC70LXQstC40LfQvtGA0L7Qsiwg0YLQtdC70LXRhNC-0L3QvtCyLCDQvNC-0L3QuNGC0L7RgNC-0LIsINC_0LvQsNC90YjQtdGC0L7Qsiwg0LfQsNC_0YDQsNCy0LrQsCDQutCw0YDRgtGA0LjQtNC20LXQuS4!5e0!3m2!1sru!2sde!4v1719691872567!5m2!1sru!2sde"
        title="Google map"
        style={{ border: 0 }}
      />
    </AspectRatio>
  );
}
