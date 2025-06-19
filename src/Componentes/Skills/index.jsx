
import Style from './index.module.css'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LabelList
} from 'recharts';

const data = [
    { name: "HTML", Skill: 80 },
    { name: "CSS", Skill: 85 },
    { name: "Node.js", Skill: 90 },
    { name: "JavaScript", Skill: 95 },
    { name: "React", Skill: 90 },
    { name: ".Net / C#", Skill: 85 },
    { name: "MySQL", Skill: 60 },
    { name: "Git", Skill: 70 },

];

function Skills() {
    return (
        <>
            <div className={Style.texto}>

                <p>Com <strong>habilidades avançadas</strong> em <strong>desenvolvimento web</strong>, sou capaz de criar páginas <strong>estruturadas e acessíveis</strong> em <strong>HTML</strong>. Utilizo <strong>CSS</strong> para oferecer um design <strong>moderno e responsivo</strong> que se adapta a diferentes dispositivos, garantindo uma excelente experiência do usuário.</p>

                <p>A <strong>interatividade</strong> é adicionada com <strong>JavaScript</strong>, permitindo recursos <strong>dínâmicos e atraentes</strong>. Além disso, sou proficiente em <strong>Node.js</strong>, o que me permite criar <strong>aplicações web robustas e escaláveis</strong>.</p>

                <p>No desenvolvimento de interfaces de usuário, uso o framework <strong>React.js</strong> para criar <strong>aplicações reativas e eficientes</strong>, proporcionando uma experiência <strong>fluida e de alta performance</strong>.</p>

                <p>Sou também <strong>proficiente em C#</strong>, utilizando-o para desenvolver <strong>aplicações de alto desempenho</strong> e <strong>soluções de automação</strong> que melhoram a produtividade e eficiência.</p>

                <p>Tenho experiência na criação de <strong>bots inteligentes</strong>, capazes de automatizar processos, interagir com usuários e integrar sistemas de forma eficaz.</p>

                <p>Com a combinação de <strong>Node.js</strong>, <strong>React.js</strong>, <strong>C#</strong> e <strong>automação de processos</strong>, sou capaz de construir <strong>aplicações modernas, escaláveis</strong> e com uma <strong>experiência de usuário excepcional</strong>.</p>

            </div>
            <div className={Style.grafico}>
                <ResponsiveContainer>
                    <BarChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <defs>
                            <linearGradient id="colorSkill" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3A86FF" stopOpacity={0.9} />
                                <stop offset="95%" stopColor="#3A86FF" stopOpacity={0.3} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip
                            labelStyle={{ color: '#3A86FF', fontWeight: 'bold' }}
                            itemStyle={{ color: '#3A86FF' }}
                            contentStyle={{
                                backgroundColor: '#f1f1f1',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                width: '80%',
                            }}
                        />

                        <Bar
                            dataKey="Skill"
                            fill="url(#colorSkill)"
                            radius={[10, 10, 0, 0]}
                            barSize={50}
                        >
                            <LabelList dataKey="Skill" position="top" fill="rgba(255, 255, 255, 0.85)" />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}

export default Skills;
