import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { initTestEnv } from "../testEnv";
import { createSubscriptionPlanService, SubscriptionPlanService } from "../../src/services/subscription/subscription-plan.service";
import { createSubscriptionService, SubscriptionService } from "../../src/services/subscription/subscription.service";

const chance = new Chance();

describe.sequential("Subscription Plan API", () => {
    let env: Awaited<ReturnType<typeof initTestEnv>>;   
    let subscriptionPlanService: SubscriptionPlanService
    let subscriptionService: SubscriptionService
    let subscriptionPlanId: string|undefined;
    beforeAll(async () => {
        env = await initTestEnv();  
        subscriptionPlanService = createSubscriptionPlanService(env?.storeClient!);
        subscriptionService = createSubscriptionService(env?.storeClient!)
    })

    it("should get subscription for another store onces proved membership", async () => {
        const res = await subscriptionService.getSubscription({
            subscription: {
                storeIds: ["6a55cf4218300f1e6924e59a"],
            }
        })
        expect(res?.subscription).not.toBeNull();
        const subscription = res?.subscription
        expect(subscription?.SubscriptionAccesses.length).greaterThan(0);
        expect(subscription?.subscriptionLimits.length).greaterThan(0);
        expect(subscription?.subscriptionPlan).not.toBeNull();
        expect(subscription?.subscriptionPlan.id).not.equal("");
    })

    // it("should create subscription plan", async () => {
    //     const res = await subscriptionPlanService.createSubscriptionPlan({
    //         subscriptionPlan: {
    //             title: chance.name(),
    //             description: chance.string(),
    //             monthlyPlanPrice: chance.integer({min: 10000000, max: 99999999})
    //         }
    //     })
    //     expect(res?.subscriptionPlan).not.toBeNull();
    //     expect(res?.subscriptionPlan.id).not.equal("");
    //     subscriptionPlanId = res?.subscriptionPlan.id
    // })
    // it("get subscription by id", async () => {
    //     const res = await subscriptionService.getSubscription({
    //         subscription: {
    //             // id: "6f02dad2-3231-4d1f-93f2-20c0554ee76f",
    //             userId: env?.userId
    //         }
    //     })

    //     expect(res?.subscription).not.toBeNull();
    //     const subscription = res?.subscription
    //     expect(subscription?.SubscriptionAccesses.length).greaterThan(0);
    //     expect(subscription?.subscriptionLimits.length).greaterThan(0);
    //     expect(subscription?.subscriptionPlan).not.toBeNull();
    //     expect(subscription?.subscriptionPlan.id).not.equal("");

    // })
    // it("get subscription by store id", async () => {
    //     const res = await subscriptionService.getActiveSubscriptionByStoreID({
    //         storeId: env?.storeId!
    //     })

    //     expect(res?.subscription).not.toBeNull();
    //     const subscription = res?.subscription
    //     expect(subscription?.SubscriptionAccesses.length).greaterThan(0);
    //     expect(subscription?.subscriptionLimits.length).greaterThan(0);

    //     expect(subscription?.subscriptionPlan).not.toBeNull();
    //     expect(subscription?.subscriptionPlan.id).not.equal("");

    // })

    // it("list subscriptions", async () => {
    //     const res = await subscriptionService.getSubscriptions({
    //         limit: 10,
    //         skip: 0
    //     })
    //     expect(res?.subscriptions.length).greaterThan(0);
    // })

    // it("create subscription", async () => {
    //     const res = await subscriptionPlanService.getSubscriptionPlans({
    //         limit: 10,
    //         skip: 0
    //     })
    //     expect(res?.subscriptionPlans.length).greaterThan(0);
    //     expect(res?.total).greaterThan(0);
    // })
})