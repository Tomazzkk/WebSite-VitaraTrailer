"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";
import { motion } from "framer-motion";

const baseModels = [
    { id: "classic", name: "Vitara Classic", price: 35900, description: "Compacto, leve e pronto para tudo." },
    { id: "offroad", name: "Vitara Off-Road", price: 45900, description: "Mais altura do solo e pneus lameiros." },
];

const accessories = [
    { id: "solar", name: "Kit Placa Solar 150W", price: 2500 },
    { id: "toldo", name: "Toldo Lateral 2.5m", price: 1800 },
    { id: "cozinha", name: "Cozinha Completa (Cooktop + Pia)", price: 3500 },
    { id: "geladeira", name: "Geladeira 12V 45L", price: 2900 },
    { id: "bateria", name: "Bateria Estacionária Extra", price: 1200 },
];

export default function Configurator() {
    const [selectedModel, setSelectedModel] = useState(baseModels[0]);
    const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);

    const toggleAccessory = (id: string) => {
        setSelectedAccessories((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const totalPrice =
        selectedModel.price +
        selectedAccessories.reduce((acc, id) => {
            const item = accessories.find((a) => a.id === id);
            return acc + (item ? item.price : 0);
        }, 0);

    const handleWhatsApp = () => {
        const accessoryNames = selectedAccessories
            .map((id) => accessories.find((a) => a.id === id)?.name)
            .join(", ");

        const message = `Olá! Gostaria de uma cotação para o *${selectedModel.name}* com os seguintes opcionais: ${accessoryNames || "Nenhum opcional"
            }. Valor estimado no site: R$ ${totalPrice.toLocaleString("pt-BR")}`;

        const url = `https://wa.me/554784351503?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <section id="configurator" className="py-24 bg-primary text-surface relative">
            {/* Background texture overlay */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">
                        Personalize
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                        Monte o Seu Vitara
                    </h2>
                    <p className="text-surface/80 max-w-2xl mx-auto">
                        Escolha o modelo base e adicione os equipamentos que farão da sua viagem uma experiência única.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left Column: Options */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Step 1: Model Selection */}
                        <div>
                            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                                <span className="bg-secondary text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                                Escolha o Modelo
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {baseModels.map((model) => (
                                    <div
                                        key={model.id}
                                        onClick={() => setSelectedModel(model)}
                                        className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 relative overflow-hidden ${selectedModel.id === model.id
                                            ? "border-secondary bg-white/10"
                                            : "border-white/10 hover:border-white/30 bg-transparent"
                                            }`}
                                    >
                                        {selectedModel.id === model.id && (
                                            <div className="absolute top-4 right-4 text-secondary">
                                                <Check size={24} />
                                            </div>
                                        )}
                                        <h4 className="text-xl font-bold mb-2">{model.name}</h4>
                                        <p className="text-sm text-surface/70 mb-4 h-10">{model.description}</p>
                                        <span className="text-lg font-bold text-secondary">
                                            R$ {model.price.toLocaleString("pt-BR")}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Step 2: Accessories */}
                        <div>
                            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                                <span className="bg-secondary text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                                Adicione Equipamentos
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {accessories.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => toggleAccessory(item.id)}
                                        className={`cursor-pointer rounded-xl p-4 border transition-all duration-200 flex items-center justify-between ${selectedAccessories.includes(item.id)
                                            ? "border-secondary bg-secondary/10"
                                            : "border-white/10 hover:bg-white/5"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedAccessories.includes(item.id) ? 'bg-secondary border-secondary' : 'border-surface/30'}`}>
                                                {selectedAccessories.includes(item.id) && <Check size={14} className="text-primary" />}
                                            </div>
                                            <span className="font-medium">{item.name}</span>
                                        </div>
                                        <span className="text-secondary font-bold text-sm">
                                            + R$ {item.price.toLocaleString("pt-BR")}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Summary Sticky */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-surface text-dark rounded-3xl p-8 shadow-2xl">
                            <h3 className="font-display text-2xl font-bold mb-6 text-primary border-b border-gray-200 pb-4">
                                Resumo do Pedido
                            </h3>

                            <div className="space-y-4 mb-4">
                                <div className="flex justify-between font-bold text-lg">
                                    <span>{selectedModel.name}</span>
                                    <span>R$ {selectedModel.price.toLocaleString("pt-BR")}</span>
                                </div>

                                {selectedAccessories.length > 0 && (
                                    <div className="text-sm text-gray-500 space-y-2 pt-2">
                                        {selectedAccessories.map(id => {
                                            const item = accessories.find(a => a.id === id);
                                            return item ? (
                                                <div key={id} className="flex justify-between">
                                                    <span>+ {item.name}</span>
                                                    <span>R$ {item.price.toLocaleString("pt-BR")}</span>
                                                </div>
                                            ) : null;
                                        })}
                                    </div>
                                )}
                            </div>

                            <div className="border-t-2 border-dashed border-gray-300 my-6 pt-4">
                                <div className="flex justify-between items-end">
                                    <span className="text-gray-500 font-bold">Total Estimado</span>
                                    <span className="text-3xl font-display font-extrabold text-primary">
                                        R$ {totalPrice.toLocaleString("pt-BR")}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-400 mt-2 text-right">
                                    *Valor sujeito a alteração. Frete não incluso.
                                </p>
                            </div>

                            <button
                                onClick={handleWhatsApp}
                                className="w-full bg-secondary hover:bg-yellow-500 text-dark-accent font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg transform hover:-translate-y-1 active:scale-95"
                            >
                                <Send size={20} />
                                Enviar Configuração
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
