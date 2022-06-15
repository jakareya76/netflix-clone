import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <section className="w-full text-white">
      <img
        className="w-full h-[400px] object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/e64d63de-40af-40b9-a3c0-f753aa45244f/BD-en-20220606-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt=""
      />
      <div className="w-full fixed top-0 left-0 bg-black/60 h-[550px]"></div>
      <div className="absolute top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
      </div>
      <SavedShows />
    </section>
  );
};

export default Account;
