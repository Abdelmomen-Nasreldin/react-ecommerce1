import appStore from '@/assets/images/app-store.svg';
import cardAmex from '@/assets/images/card-amex.svg';
import cardCash from '@/assets/images/card-cash.svg';
import cardMastercard from '@/assets/images/card-mastercard.svg';
import cardVisa from '@/assets/images/card-visa.svg';
import googlePlay from '@/assets/images/google-play.svg';

const Footer = () => {
  return (
    <footer className="bg-[#f0f3f2]">
  <div className="container mx-auto px-8 py-10">
    <h3 className="text-2xl">Get the FreshCart app</h3>
    <p className="text-sm text-gray-400">We will send you a link, open it on your phone to download the app.</p>
    <div className="contact flex justify-evenly gap-4 my-5 flex-wrap ">
      <input className="flex-1 p-3 rounded" type="email" placeholder="Email" />
      <button className="bg-[#08ac0a] rounded text-white p-3 px-4">Share App Link</button>
    </div>
    <hr />
    <div className="flex justify-between items-center flex-wrap my-5 gap-5">
      <div className="payments flex gap-3 items-center flex-wrap">
        <h6>Payment Partners</h6>
        <div className="images flex flex-wrap gap-2">

          <img src={cardVisa} alt="footer_image" />
          <img src={cardCash} alt="footer_image" />
          <img src={cardMastercard} alt="footer_image" />
          <img src={cardAmex} alt="footer_image" />
        </div>
      </div>
      <div className="apps flex gap-3 items-center flex-wrap">
        <h6>Get deliveries with FreshCart</h6>
        <div className="images flex flex-wrap gap-2">

          <img src={appStore} alt="footer_image" />
          <img src={googlePlay} alt="footer_image" />
        </div>
      </div>
    </div>
    <hr />

  </div>
</footer>

  )
}

export default Footer