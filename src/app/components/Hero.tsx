import Image from 'next/image'

export default function Hero() {
  return (
    <div className="bg-white rounded-xl p-8 shadow-2xl">
      <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-6 text-gray-800">
        Profile : Title
      </h2>
      
      <div className="flex gap-8">
        {/* 프로필 이미지 섹션 */}
        <div className="w-48 h-48 relative rounded-full overflow-hidden border-2 border-gray-200">
          <Image
            src="/images/profileImg.jpg"
            alt="Profile picture"
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* 정보 섹션 */}
        <div className="flex-1">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2 text-blue-600">I AM</h3>
            <p className="mb-1 text-gray-700">이름: 이프로</p>
            <p className="mb-4 text-gray-700">포지션: PM 서비스 기획 / FE Developer(jr)</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2 text-purple-600">_Contact</h3>
            <p className="mb-1 text-gray-700">Email: leepro@naver.com</p>
            <p className="mb-4 text-gray-700">Phone: +082-1234-5678</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2 text-emerald-600">_Channel</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="w-16 text-gray-700">SNS:</span>
                <input type="text" className="flex-1 h-8 border border-gray-300 rounded bg-gray-50 px-3" />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-gray-700">GitHub:</span>
                <input type="text" className="flex-1 h-8 border border-gray-300 rounded bg-gray-50 px-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}