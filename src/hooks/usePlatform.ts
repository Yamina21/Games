import usePlatforms from "./UsePlatforms";

const usePlatform= (id?: number) =>{
    const { data: platforms, error } = usePlatforms();
    return platforms?.results.find(
      (p) => p.id === id
    );
}

export default usePlatform;