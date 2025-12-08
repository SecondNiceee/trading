"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Globe, DollarSign, Clock, Users, AlertTriangle } from "lucide-react"

export function ForexLessonContent() {
  return (
    <div className="space-y-6">
      {/* Introduction */}
      <Card className="border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl">
        <p className="text-white/80 leading-relaxed mb-4">
          Pandemic, the Russian-Ukrainian war, the oil price slide or natural disasters in Asia can all have major
          impacts on the economy but for currency traders these are{" "}
          <span className="text-purple-400 font-semibold">dominant profit opportunities</span>.
        </p>
        <p className="text-white/80 leading-relaxed mb-4">
          During these volatile times more than <span className="text-green-400 font-bold">2,000,000 people</span>{" "}
          worldwide have gained knowledge and experience through our exclusive content and rich illustrations.
        </p>
        <p className="text-white/80 leading-relaxed">
          Once you've unlocked and gone through everything GoForex app withholds, you'll be more confident trading with
          your own investments.
        </p>
      </Card>

      {/* Main Title */}
      <div className="text-center py-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          YOUR <span className="text-purple-400">"FOREX WISDOM"</span> IS ABOUT TO GROW RAPIDLY.
        </h2>
        <p className="text-white/60 mt-2">READ ON.</p>
      </div>

      {/* Financial Crisis Section */}
      <Card className="border-2 border-orange-500/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
          </div>
          <h3 className="text-xl font-bold text-white">HISTORY HAS PROVEN THAT DURING FINANCIAL CRISIS:</h3>
        </div>
        <ul className="space-y-2 text-white/80 ml-4">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            The stock market declines
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            The real estate transactions freeze
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            The retail sector may suffer high losses or even bankruptcy
          </li>
        </ul>
        <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
          <p className="text-white/90 leading-relaxed">
            If your predictions are correct, then{" "}
            <span className="text-green-400 font-semibold">Forex can remain profitable even in the worst of times</span>{" "}
            because currencies are always traded in pairs. When the value of one currency declines, the value of the
            other one rises.
          </p>
          <p className="text-white/70 mt-3 text-sm">
            Pretty awesome, huh? You can earn, regardless of whether the market is trending up or down, but if your
            prediction is wrong, you can lose as much.
          </p>
        </div>
      </Card>

      {/* Trade from Anywhere */}
      <Card className="border-2 border-blue-500/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <Globe className="w-5 h-5 text-blue-500" />
          </div>
          <h3 className="text-xl font-bold text-white">TRADE WHILE LYING IN A HAMMOCK</h3>
        </div>
        <p className="text-white/80 leading-relaxed">
          Access the trading world from anywhere while lying in a hammock! All you need is a computer and/or a
          smartphone and an Internet connection. Many successful Forex traders use advanced trading apps on their iPhone
          or Android smartphones and tablets. So choose the lifestyle that suits your trading goals and{" "}
          <span className="text-blue-400 font-semibold">trade the way you want to</span>.
        </p>
      </Card>

      {/* Start with $250 */}
      <Card className="border-2 border-green-500/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-green-500" />
          </div>
          <h3 className="text-xl font-bold text-white">START WITH $250</h3>
        </div>
        <p className="text-white/80 leading-relaxed mb-4">
          Unlike any other financial market, Forex has low entry costs due to the large number of market participants.
          Also, the increasing competition among brokers lowers their commissions and consequently transaction costs.
        </p>
        <p className="text-white/80 leading-relaxed">
          Currently, Forex is the most cost-effective market for retail investors. In Forex, you can start trading with{" "}
          <span className="text-green-400 font-bold">$100-$2000</span>. As you start to get a stronger grasp of forex
          trading and risk management, invest more. Remember that losses are a part of the game even for experienced
          traders, but the more you learn, the less likely you will make rookie mistakes.
        </p>
      </Card>

      {/* Easy Rules */}
      <Card className="border-2 border-purple-500/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-purple-500" />
          </div>
          <h3 className="text-xl font-bold text-white">EASY RULES</h3>
        </div>
        <p className="text-white/80 leading-relaxed">
          In 2023 there are more than 45,000 publicly traded companies worldwide and although there are many currencies
          in the forex market, traders work mainly with just <span className="text-purple-400 font-bold">8</span>. In
          addition, the value of currencies is affected by significantly less factors than the value of stocks. As a
          result, it's relatively easier for you to follow and predict changes in Forex market.
        </p>
      </Card>

      {/* Sell at Any Time */}
      <Card className="border-2 border-cyan-500/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
            <Clock className="w-5 h-5 text-cyan-500" />
          </div>
          <h3 className="text-xl font-bold text-white">SELL AT ANY TIME</h3>
        </div>
        <p className="text-white/80 leading-relaxed">
          With a daily turnover of more than <span className="text-cyan-400 font-bold">$6.6 trillion</span>, forex is
          the most liquid financial market. There is always a buyer when you want to sell and there is always a seller
          when you want to buy. This is highly reassuring! But it can get better, if you build more money to earn more
          money, which you can withdraw whenever you want!
        </p>
      </Card>

      {/* Social Trading */}
      <Card className="border-2 border-pink-500/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
            <Users className="w-5 h-5 text-pink-500" />
          </div>
          <h3 className="text-xl font-bold text-white">LEARN FROM PROS WITH SOCIAL TRADING</h3>
        </div>
        <p className="text-white/80 leading-relaxed">
          Now when technology is so developed and internet access is everywhere, you are free to use it on the go. With
          a new groundbreaking innovation <span className="text-pink-400 font-semibold">Forex Social Trading</span> you
          can follow and learn from professional traders or even copy them automatically and make them work for you.
          Just monitor their success on the go with the mobile app.
        </p>
      </Card>
    </div>
  )
}
