import { PackageDto } from './dto/package.dto';

describe('PackageDto', () => {
  it('should be defined', () => {
    expect(new PackageDto()).toBeDefined();
  });
});
